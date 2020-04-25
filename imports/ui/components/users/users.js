import {
  Meteor
} from 'meteor/meteor';
import './users.html';
import './../../helpers/helpers.js';

Template.users.onCreated(function() {
  this.searchQuery = new ReactiveVar('');
  this.limit = new ReactiveVar(5);
  this.autorun(() => {
    this.subscribe("users.search", this.searchQuery.get(), this.limit.get());
  });
});

Template.users.helpers({
  users() {
    return Meteor.users.find({}, {
      sort: {
        createdAt: -1
      }
    });
  },
});

Template.users.events({
  'click .deleteUser'(e, t) {
    Meteor.call('users.remove', this._id, (eee, res) => {
      err && console.log(err);
      res && console.log(res);
    });
  },
  'keyup input[name="users"]'(e, t) {
    t.searchQuery.set(e.target.value.trim());
  },
  'click .toggleRole'(e, t) {
    Meteor.call('user.toggleRole', this._id, e.target.innerText.toLowerCase(), () => {});
  }
});