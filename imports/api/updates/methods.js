// Methods related to links

import {
  Meteor
} from 'meteor/meteor';
import {
  check
} from 'meteor/check';
import {
  Updates
} from './updates.js';

Meteor.methods({
  'updates.insert'(data) {
    return Updates.insert(data);
  }
});