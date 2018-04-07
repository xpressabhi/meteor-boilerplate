import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/profile/profile.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/support/support.js';
import '../../ui/pages/faqs/Faqs.js';
import '../../ui/pages/users/Users.js';
import '../../ui/pages/dashboard/dashboard.js';


// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', {nav:'nav', main: 'App_home'});
  },
});
FlowRouter.route('/users', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  name: 'Users',
  action() {
    BlazeLayout.render('App_body', {nav:'nav', main: 'usersPage'});
  },
});
FlowRouter.route('/dashboard', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  name: 'Dashboard',
  action() {
    BlazeLayout.render('App_body', {nav:'nav', main: 'dashboard'});
  },
});

FlowRouter.route('/profile', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  name: 'Profile',
  action() {
    BlazeLayout.render('App_body', {nav:'nav', main: 'Profile'});
  },
});
FlowRouter.route('/support', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  name: 'Support',
  action() {
    BlazeLayout.render('App_body', {nav:'nav', main: 'Support'});
  },
});
FlowRouter.route('/support/:id', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  name: 'Support',
  action() {
    BlazeLayout.render('App_body', {nav:'nav', main: 'Support'});
  },
});
FlowRouter.route('/faqs', {
  name: 'FAQs',
  action() {
    BlazeLayout.render('App_body', {nav:'nav', main: 'Faqs'});
  },
});


FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
