import SimpleSchema from 'simpl-schema';
import {
  Mongo
} from 'meteor/mongo';

export const Chats = new Mongo.Collection('chats');

Chats.schema = new SimpleSchema({
  customerId: {
    type: String
  },
  comments: {
    type: String,
    max: 3000
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

Chats.attachSchema(Chats.schema);