import './support.html';
import {Chats} from '/imports/api/chats/chats.js';
Template.support.onCreated(function() {
  this.autorun(() => {
    const userId = FlowRouter.getParam('id') || Meteor.userId();
    this.subscribe('chats.all', userId);
    this.subscribe('user.one',userId);
    if (Roles.userIsInRole(userId, 'admin')) {
      let userIds = [];
      Chats.find().map((ch) => {
        if (ch.customerId && !userIds.includes(ch.customerId))
          userIds.push(ch.customerId);
        }
      );
      this.subscribe('user.byids', userIds);
    }
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
    event.preventDefault();
    const comment = event.target.comments.value.trim();
    const userId = FlowRouter.getParam('id') || Meteor.userId();
    console.log('logs ', comment, userId);
    Meteor.call('chats.insert', userId, comment, (err, res) => {
      if (err) {
        console.log(err);
      }
      if (res) {
        console.log(res);
        event.target.comments.value = '';
      }
    });
  }
});
