// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Chats } from './chats.js';

Meteor.methods({
  'chats.insert'(id,comments) {
    check(id, String);
    check(comments, String);

    return Chats.insert({
      customerId:id,
      comments:comments
    });
  },
});
