import './notifications.html';

import {
  Updates
} from '/imports/api/updates/updates.js';

Template.notifications.onCreated(function() {
  this.sending = new ReactiveVar();
  this.autorun(() => {
    this.subscribe('pushsubs.count');
    this.subscribe('updates.all');
  })
});

Template.notifications.helpers({
  updates() {
    return Updates.find({}, {
      sort: {
        createdAt: -1
      }
    });
  },
  sending() {
    return Template.instance().sending.get();
  }
});

Template.notifications.events({
  "submit .sendMsg"(e, t) {
    e.preventDefault();
    t.sending.set(true);
    Meteor.call('pushsubs.send', 'Swechha Farms', e.target.msg.value, '/', () => {
      t.sending.set(false);
    })
  }
});