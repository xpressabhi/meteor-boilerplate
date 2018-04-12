import './nav.html';

Template.nav.onCreated(function navOnCreated() {
  // counter starts at 0

});

Template.nav.onRendered(function () {
  const path = FlowRouter.current().path.split('/')[1];
  $('.active').removeClass('active');
  $(`a[href$="/${path}"]`).addClass('active');
});

Template.nav.helpers({
  useremail(){
    const user = Meteor.user();
    return user && user.emails && user.emails[0].address;
  },
  gravatorUrl: function() {
    const user = Meteor.user();
    const email = user && user.emails && user.emails[0].address;
    let url;
    if (email) {
      var options = {
        secure: true
      };
      url = Gravatar.imageUrl(email, options);
    }
    return url;

  }
});

Template.nav.events({
  'click .logout': () => {
    AccountsTemplates.logout();
    FlowRouter.go('/');
  },
  'click .nav-link' (event, templateInstance) {
    $('.active').removeClass('active');
    $(event.currentTarget).addClass('active');
  }

});
