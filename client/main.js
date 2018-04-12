// Client entry point, imports all client code
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'


import '/imports/startup/client';
import '/imports/startup/both';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';

AccountsTemplates.configure({
  //defaultTemplate: 'Auth_page',
  defaultLayout: 'App_body',
  defaultContentRegion: 'main',
  defaultLayoutRegions: {nav: 'nav'}
});

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
  redirect: '/'
});
AccountsTemplates.configureRoute('signUp', {
  name: 'join',
  path: '/join',
  redirect: '/'
});
// AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPwd',
  path: '/reset-password'
});
