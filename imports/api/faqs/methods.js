// Methods related to links

import {
  Meteor
} from 'meteor/meteor';
import {
  check
} from 'meteor/check';
import {
  FAQs
} from './faqs.js';

Meteor.methods({
  "faqs.insert"(question, answer) {
    check(question, String);
    check(answer, String);
    if (Roles.userIsInRole(this.userId, 'admin')) {
      return FAQs.insert({
        question,
        answer
      });
    }
    return;
  },
  "faqs.remove"(id) {
    check(id, String);
    if (Roles.userIsInRole(this.userId, 'admin')) {
      return FAQs.remove(id);
    }
    return;
  }
});