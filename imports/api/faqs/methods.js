// Methods related to links

import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {FAQs} from './faqs.js';

Meteor.methods({
  "faqs.insert" (q, a) {
    check(q, String);
    check(a, String);
    if (Roles.userIsInRole(this.userId, 'admin')) {
      return FAQs.insert({question: q, answer: a});
    }
    return;
  },
  "faqs.remove" (id) {
    check(id, String);
    if (Roles.userIsInRole(this.userId, 'admin')) {
      return FAQs.remove({_id: id});
    }
    return;
  }
});
