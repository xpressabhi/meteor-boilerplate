import './userprofile.html';
import './../../helpers/helper.js';

import R from 'ramda';

Template.userprofile.onCreated(function(){

});

Template.userprofile.helpers({
  user(){
    console.log(Meteor.user());
    return Meteor.user();
  }
});

Template.userprofile.events({
  "event": function(e, t){

  }
});
