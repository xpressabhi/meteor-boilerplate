import SimpleSchema from 'simpl-schema';
import {
  Mongo
} from 'meteor/mongo';

export const PushSubs = new Mongo.Collection('pushsubs');