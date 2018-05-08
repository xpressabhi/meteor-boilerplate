// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.

AccountsTemplates.addField({
  _id: 'type',
  type: 'hidden'
});

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
