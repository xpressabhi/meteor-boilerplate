import './faqs.html';
import {FAQs} from '/imports/api/faqs/faqs.js';
Template.faqs.onCreated(function(){
  this.allowAddingFaq = new ReactiveVar(false);
  Meteor.subscribe('faqs.all');
});

Template.faqs.helpers({
  allowAddingFaq(){
    return Template.instance().allowAddingFaq.get();
  },
  faqs: function(){
    return FAQs.find({},{sort:{createdAt:-1}});
  }
});

Template.faqs.events({
  "click .allowAddingFaq"(event, templateInstance){
    templateInstance.allowAddingFaq.set(true);
  },
  "click .cancelAddingFaq"(event, templateInstance){
    templateInstance.allowAddingFaq.set(false);
  },
  "submit .add-faq"(event, templateInstance){
    event.preventDefault();
    const target = event.target;
    const q = target.question.value.trim();
    const a = target.answer.value.trim();
    Meteor.call('faqs.insert',q,a,(err,res)=>{
      if (err) {
        console.log(err);
      }
      if (res) {
        console.log(res);
        target.question.value='';
        target.answer.value='';
        templateInstance.allowAddingFaq.set(false);
      }
    });
  },
  'click .removeFaq'(event, templateInstance){
    Meteor.call('faqs.remove',this._id,(e,r)=>{
      if (e) {
        console.log(e);
      }
    });
  }
});
