import {
  Meteor
} from 'meteor/meteor';
import {
  check
} from 'meteor/check';
import {
  PushSubs
} from './pushsubs.js';

const webPush = require('web-push');
//webPush.setGCMAPIKey('AAAAbDJaGlg:APA91bEEFlwDeBmhd4uHv5JLndhoslX31fDDctMJAw67QdcuRmr6zFgfAeIwFkm4mVQh74LY5VBnFZ5m-3Py_g_nwHo6PmprigjXjwrMkXNKWAJocSZEe1wR8KSop8-q8etHz_8v6EBe');
webPush.setVapidDetails('https://meteor.app', Meteor.settings.public.VAPID_PublicKey, Meteor.settings.VAPID_PrivateKey);

const pushmsg = (data, query = {}) => {
  if (Meteor.isProduction) {
    const options = {
      TTL: 50
    };
    PushSubs.find(query).map((sub) => {
      if (sub.subscription) {
        webPush.sendNotification(sub.subscription, JSON.stringify(data), options).then(function() {
          PushSubs.update(sub._id, {
            $set: {
              notifiedAt: new Date()
            }
          }, () => {})
        }).catch(function(error) {
          console.log('error', error.body, error.statusCode);
          PushSubs.remove(sub._id, () => {});
        })
      } else {
        console.log('data not formatted');
        PushSubs.remove(sub._id, () => {});
      }
    })
  } else {
    console.log('Not sending notification in development or you are not admin', this.userId, data, query);
  }
}
Meteor.methods({
  'pushsubs.remove'() {
    return PushSubs.remove({
      userId: this.userId
    });
  },
  'pushsubs.insert'(data) {
    data = JSON.parse(data);
    const pushsub = PushSubs.findOne({
      'subscription.keys.p256dh': data.subscription.keys.p256dh,
      'subscription.keys.auth': data.subscription.keys.auth
    });
    if (pushsub) {
      !pushsub.userId && PushSubs.update(pushsub._id, {
        $set: {
          userId: this.userId
        }
      }, () => {});
    } else {
      data.agent = this.connection.httpHeaders['user-agent'];
      if (this.userId) data.userId = this.userId;
      return PushSubs.insert(
        data
      );
    }
  },
  'pushsubs.test'() {
    const data = {
      title: 'self test title',
      msg: 'self test msg',
      url: '/'
    };
    console.log(this.userId, data);
    pushmsg(data, {
      userId: this.userId
    });
  },
  'pushsubs.sendone'(title, msg, userId) {
    check(title, String);
    check(msg, String);
    check(userId, String);
    const data = {
      title,
      msg,
      url: '/chats'
    };
    pushmsg(data, {
      userId
    });
  },
  'pushsubs.send'(title = 'Swechha Farms', msg = 'Delivering vegetables and fruits', url = '/') {
    check(title, String);
    check(msg, String);
    const data = {
      title,
      msg,
      url
    };
    Meteor.call('updates.insert', {
      msg
    }, () => {});
    if (Roles.userIsInRole(this.userId, 'admin')) {
      pushmsg(data);
    }
  }
});