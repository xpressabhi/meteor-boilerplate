import './nav.html';

Template.nav.onCreated(function navOnCreated() {
  // counter starts at 0

});

Template.nav.helpers({

});

Template.nav.events({
  'click .logout': () => {
    AccountsTemplates.logout();
  }

});
