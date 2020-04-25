import {
  Meteor
} from 'meteor/meteor';

const fields = {
  fields: {
    emails: 1,
    createdAt: 1
  }
};

const options = {
  sort: {
    createdAt: -1
  },
  fields: {
    emails: 1,
    roles: 1,
    createdAt: 1
  },
  limit: 50
};
Meteor.publish("user.byids", function(ids) {
  check(ids, [String]);
  return Meteor.users.find({
    _id: {
      $in: ids
    }
  }, options);
});

Meteor.publish("user.one", function(id) {
  check(id, String);
  return Meteor.users.find({
    _id: id
  }, options);
});

Meteor.publish('users.all', function() {
  return Meteor.users.find({}, options);
});

Meteor.publish('users.search', function(role, text, limit) {
  if (Roles.userIsInRole(this.userId, 'admin')) {
    const query = {};
    if (role) {
      const userinrole = Roles.getUsersInRole(role).fetch().map(r => r._id);
      query._id = {
        $in: userinrole
      }
    }
    if (text && text.length > 2) {
      const regex = new RegExp(text, 'i');
      query.$or = [{
        "emails.address": regex
      }, {
        'profile.name': regex
      }]
    }
    return Meteor.users.find(query, {
      sort: {
        createdAt: -1
      },
      fields: {
        profile: 1,
        emails: 1,
        createdAt: 1
      },
      limit
    });
  } else {
    return this.ready();
  }
});

Meteor.publish('user.counts', function() {
  Counts.publish(this, 'allUsers', Meteor.users.find({}));
});