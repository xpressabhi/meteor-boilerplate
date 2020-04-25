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
    await import('../../ui/pages/users/Users.js');
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
  async action() {
    await import('../../ui/pages/dashboard/dashboard.js');
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
    await import('../../ui/pages/profile/profile.js');
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
  async action() {
    await import('../../ui/pages/support/support.js');
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
  async action() {
    await import('../../ui/pages/support/support.js');
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'Support',
      footer: 'footer'
    });
  },
});
FlowRouter.route('/faqs', {
  name: 'FAQs',
  async action() {
    await import('../../ui/pages/faqs/Faqs.js');
    BlazeLayout.render('App_body', {
      nav: 'nav',
      main: 'Faqs',
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