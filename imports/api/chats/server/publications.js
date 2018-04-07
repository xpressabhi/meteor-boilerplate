// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Chats } from '../chats.js';

Meteor.publish('chats.all', function (id) {
  check(id, String);
  
  if (Roles.userIsInRole(id, ['admin'])) {
    return Chats.find({});
  }
  else {
    return Chats.find({customerId:id});
  }
});
