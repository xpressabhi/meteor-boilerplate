import {Meteor} from 'meteor/meteor';
import './users.html';
import './../../helpers/helpers.js';

Template.users.onCreated(function() {
  // counter starts at 0
  const self = this;
  self.searchQuery = new ReactiveVar('');
  self.searching = new ReactiveVar(false);
  self.autorun(() => {
    self.subscribe("users.search", self.searchQuery.get(), () => {
      setTimeout(() => {
        this.searching.set(false);
      }, 300);
    });
  });

});

Template.users.helpers({
  panelClass() {
    return 'panel-primary';
  },
  users() {
    return Meteor.users.find({}, {
      sort: {
        createdAt: -1
      }
    });
  },
  useremail() {
    return this.emails[0].address;
  },
  isAdmin() {
    return Roles.userIsInRole(this._id, 'admin');
  },
  searching(){
    return Template.instance().searching.get();
  }
});

Template.users.events({
  'click .deleteUser' (event, templateInstance) {
    Meteor.call('users.remove', this._id, (e, r) => {
      if (e)
        console.log(e);
      if (r)
        console.log(r);
      }
    );
  },
  'keyup input[name="users"]' (event, templateInstance) {
    const txt = ev.target.value.trim();
    t.searchQuery.set(txt);
    t.searching.set(true);
  },
  'click .toggleRole'(event, templateInstance){
    const role = event.target.innerText.toLowerCase();
    Meteor.call('user.toggleRole', this._id, role);
  }

});
