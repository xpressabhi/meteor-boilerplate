import {Meteor} from 'meteor/meteor';
import './users.html';
import './../../helpers/helpers.js';
import R from 'ramda';

Template.users.onCreated(function() {
  // counter starts at 0
  const self = this;
  const urlquery = FlowRouter.getParam('txt');
  if (R.any(R.equals(urlquery))(['NEWUSER', 'ACTIVE', 'INACTIVE'])) {
    self.searchQuery = new ReactiveVar(urlquery);
  } else {
    self.searchQuery = new ReactiveVar('');
  }
  self.searching = new ReactiveVar(false);
  self.selectedId = new ReactiveVar('');
  self.nameWarning = new ReactiveVar(false);
  self.actionWarnings = new ReactiveVar();
  self.autorun(() => {
    self.subscribe("users.search", self.searchQuery.get(), () => {
      setTimeout(() => {
        this.searching.set(false);
      }, 300);
    });
  });

});

Template.users.helpers({
  panelClass(){
    return 'panel-primary';
  },
  actionWarnings() {
    return Template.instance().actionWarnings.get();
  },
  users() {
    return Meteor.users.find({}, {
      sort: {
        createdAt: -1
      }
    });
  },
  isAdmin() {
    if (Roles.userIsInRole(this._id, 'admin')) {
      return true;
    }
    return false;
  },
  useremail() {
    return this.emails[0].address;
  },
  isAdmin() {
    return Roles.userIsInRole(this._id, 'admin');
  },
  nameWarning() {
    //  console.log('checking');
    return Template.instance().nameWarning.get();
  }
});

Template.users.events({
  'click .setActive' (e, t) {
    t.searchQuery.set('ACTIVE');
  },
  'click .setInActive' (e, t) {
    t.searchQuery.set('INACTIVE');
  },
  'click .setNew' (e, t) {
    t.searchQuery.set('NEWUSER');
  },
  'click .setAll' (e, t) {
    t.searchQuery.set('');
  },
  'click .deleteUser' (e, t) {
    Meteor.call('users.remove', this._id, (e, r) => {
      if (e)
        console.log(e);
      if (r)
        console.log(r);
      }
    )
  }

});
