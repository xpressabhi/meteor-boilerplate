import {
  FlowRouter
} from 'meteor/kadira:flow-router';
import {
  BlazeLayout
} from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';

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
  async action() {
    await import('../../ui/components/users/users.js');
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'users',
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
  async action() {
    await import('../../ui/components/dashboard/dashboard.js');
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
  async action() {
    await import('../../ui/components/profile/profile.js');
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'profile',
      footer: 'footer'
    });
  },
});
FlowRouter.route('/support', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  name: 'Support',
  async action() {
    await import('../../ui/components/support/support.js');
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'support',
      footer: 'footer'
    });
  },
});
FlowRouter.route('/support/:id', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  name: 'Support',
  async action() {
    await import('../../ui/components/support/support.js');
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'support',
      footer: 'footer'
    });
  },
});
FlowRouter.route('/faqs', {
  name: 'FAQs',
  async action() {
    await import('../../ui/components/faqs/faqs.js');
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'faqs',
      footer: 'footer'
    });
  },
});


FlowRouter.notFound = {
  async action() {
    await import('../../ui/pages/not-found/not-found.js');
    BlazeLayout.render('App_body', {
      main: 'App_notFound',
      footer: 'footer'
    });
  },
};