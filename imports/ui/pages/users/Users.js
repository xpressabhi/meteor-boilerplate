import './Users.html';
import '../../components/users/users.js';

Template.usersPage.onCreated(function usersOnCreated() {
  // counter starts at 0

});

Template.usersPage.helpers({

});

Template.usersPage.events({
  'click .logout': () => {
    AccountsTemplates.logout();
  }

});
