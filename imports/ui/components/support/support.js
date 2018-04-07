import './support.html';
import {Chats} from '/imports/api/chats/chats.js';
Template.support.onCreated(function() {
  const self = this;
  self.autorun(() => {
    const userId = FlowRouter.getParam('id') || Meteor.userId();
    self.subscribe('chats.all', userId);
    self.subscribe('user.one',userId);
  });

});

Template.support.helpers({
  customerEmail(){
    const userId = FlowRouter.getParam('id');
    if (userId) {
      const user =  Meteor.users.findOne({_id:userId});
      return user && user.emails[0].address;
    }
  },
  chats: function(){
    return Chats.find();
  },
  chatsReverse: function(){
    return Chats.find({},{sort:{createdAt:-1}});
  },
  isAdmin(){
    if (this.customerId===this.userId) {
      return false;
    } else {
      return true;
    }
  },
  showChatForm(){
    const userId = FlowRouter.getParam('id');
    const loggedInUser = Meteor.userId();
    if(userId || !Roles.userIsInRole(loggedInUser, 'admin')){
      return true;
    }else{
      return false;
    }
  },
  chatPlaceholder(){
    const loggedInUser = Meteor.userId();
    if(Roles.userIsInRole(loggedInUser, 'admin')){
      return 'Reply to customer...';
    }else{
      return 'What\'s your doubt?';
    }
  }
});
Template.support.events({
  "submit .support" (event, templateInstance) {
    e.preventDefault();
    const comment = e.target.comments.value.trim();
    const userId = FlowRouter.getParam('id') || Meteor.userId();
    Meteor.call('chats.insert', userId, comment, (err, res) => {
      if (err) {
        console.log(err);
      }
      if (res) {
        console.log(res);
        e.target.comments.value = '';
      }
    });
  }
});
