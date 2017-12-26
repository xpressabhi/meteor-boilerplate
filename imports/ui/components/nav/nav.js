import './nav.html';

Template.nav.onCreated(function navOnCreated() {
  // counter starts at 0

});

Template.nav.helpers({
  useremail(){
    const user = Meteor.user();
    return user && user.emails && user.emails[0].address;
  }
});

Template.nav.events({
  'click .logout': () => {
    AccountsTemplates.logout();
  }

});
