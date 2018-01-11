import './nav.html';

Template.nav.onCreated(function navOnCreated() {
  // counter starts at 0

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

      //  var md5Hash = Gravatar.hash(email);
      // 5658ffccee7f0ebfda2b226238b1eb6e

      url = Gravatar.imageUrl(email, options);
      // https://secure.gravatar.com/avatar/5658ffccee7f0ebfda2b226238b1eb6e
    //  console.log(url);

      //  var url2 = Gravatar.imageUrl(md5Hash, options);
      // https://secure.gravatar.com/avatar/5658ffccee7f0ebfda2b226238b1eb6e
      //  console.log(url2);
    }
    return url;

  }
});

Template.nav.events({
  'click .logout': () => {
    AccountsTemplates.logout();
  }

});
