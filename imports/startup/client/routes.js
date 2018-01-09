import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/profile/profile.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', {nav:'nav', main: 'App_home'});
  },
});
FlowRouter.route('/profile', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  name: 'Profile',
  action() {
    BlazeLayout.render('App_body', {nav:'nav', main: 'Profile'});
  },
});


FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
