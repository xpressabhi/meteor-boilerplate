import './Users.html';
import '../../components/users/users.js';

Template.Users.onCreated(function usersOnCreated() {
  // counter starts at 0

});

Template.Users.helpers({

});

Template.Users.events({
  'click .logout': () => {
    AccountsTemplates.logout();
  }

});
