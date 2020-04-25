import {
  FlowRouter
} from 'meteor/kadira:flow-router';
import {
  BlazeLayout
} from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/profile/profile.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/support/support.js';
import '../../ui/pages/faqs/Faqs.js';
import '../../ui/pages/users/Users.js';
import '../../ui/pages/dashboard/dashboard.js';

const scrollTop = () => {
  window.scrollTo(0, 0);
};


// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'App_home',
      footer: 'footer'
    });
  },
});

FlowRouter.route('/notifications', {
  triggersEnter: [AccountsTemplates.ensureSignedIn, scrollTop],
  name: 'Notifications',
  async action() {
    await import('../../ui/components/notifications/notifications.js');
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'notifications',
      footer: 'footer'
    });
  },
});

FlowRouter.route('/users', {
  triggersEnter: [
    AccountsTemplates.ensureSignedIn,
    scrollTop,
    (context, redirect) => {
      if (!Roles.userIsInRole(Meteor.userId(), ['admin'])) {
        redirect('/');
      }
    }
  ],
  name: 'Users',
  action() {
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'usersPage',
      footer: 'footer'
    });
  },
});
FlowRouter.route('/dashboard', {
  triggersEnter: [
    AccountsTemplates.ensureSignedIn,
    scrollTop,
    (context, redirect) => {
      if (!Roles.userIsInRole(Meteor.userId(), ['admin'])) {
        redirect('/');
      }
    }
  ],
  name: 'Dashboard',
  action() {
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'dashboard',
      footer: 'footer'
    });
  },
});

FlowRouter.route('/profile', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  name: 'Profile',
  action() {
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'Profile',
      footer: 'footer'
    });
  },
});
FlowRouter.route('/support', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  name: 'Support',
  action() {
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'Support',
      footer: 'footer'
    });
  },
});
FlowRouter.route('/support/:id', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  name: 'Support',
  action() {
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'Support',
      footer: 'footer'
    });
  },
});
FlowRouter.route('/faqs', {
  name: 'FAQs',
  action() {
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'Faqs',
      footer: 'footer'
    });
  },
});


FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', {
      main: 'App_notFound',
      footer: 'footer'
    });
  },
};