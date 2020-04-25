import SimpleSchema from 'simpl-schema';
import {
  Mongo
} from 'meteor/mongo';

export const Updates = new Mongo.Collection('updates');

Updates.schema = new SimpleSchema({
  msg: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  },
  userId: {
    type: String,
    autoValue: function() {
      if (this.isInsert) {
        return this.userId;
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  }
});

Updates.attachSchema(Updates.schema);