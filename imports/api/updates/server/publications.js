// All links-related publications

import {
  Meteor
} from 'meteor/meteor';
import {
  Updates
} from '../updates.js';

Meteor.publish('updates.all', function(limit = 5) {
  return Updates.find({}, {
    sort: {
      createdAt: -1
    },
    limit
  });
});