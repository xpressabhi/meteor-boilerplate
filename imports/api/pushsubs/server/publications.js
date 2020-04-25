import {
  Meteor
} from 'meteor/meteor';
import {
  PushSubs
} from '../pushsubs.js';

Meteor.publish("pushsubs.count", function() {
  if (Roles.userIsInRole(this.userId, 'admin')) {
    Counts.publish(this, 'pushSubsCount', PushSubs.find({}));
  }

});