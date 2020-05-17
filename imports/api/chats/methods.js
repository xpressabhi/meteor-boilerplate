// Methods related to links

import {
  Meteor
} from 'meteor/meteor';
import {
  check
} from 'meteor/check';
import {
  Chats
} from './chats.js';

Meteor.methods({
  'chats.insert'(customerId, comments) {
    check(customerId, String);
    check(comments, String);
    return Chats.insert({
      customerId,
      comments
    });
  },
});