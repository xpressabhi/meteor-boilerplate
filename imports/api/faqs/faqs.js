import SimpleSchema from 'simpl-schema';
import {
  Mongo
} from 'meteor/mongo';

export const FAQs = new Mongo.Collection('faqs');

FAQs.schema = new SimpleSchema({
  question: {
    type: String,
    max: 300
  },
  answer: {
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

FAQs.attachSchema(FAQs.schema);