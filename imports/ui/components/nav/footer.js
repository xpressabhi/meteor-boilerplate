import './footer.html';

Template.footer.helpers({
  username() {
    const user = Meteor.user();
    if (user) {
      return user.profile.name;
    } else {
      return 'a new user';
    }
  }
});