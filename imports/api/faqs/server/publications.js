// All links-related publications

import { Meteor } from 'meteor/meteor';
import { FAQs } from '../faqs.js';

Meteor.publish("faqs.all", function(){
  return FAQs.find();
});
