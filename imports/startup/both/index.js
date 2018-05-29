// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.

AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signin',
  path: '/login',
  template: 'authForm',
  layoutTemplate: 'App_body',
  layoutRegions: {nav: 'nav',footer:'footer'},
  contentRegion: 'main',
  redirect: '/'
});
AccountsTemplates.configureRoute('signUp', {
  layoutType: 'blaze',
  name: 'signup',
  path: '/join',
  template: 'authForm',
  layoutTemplate: 'App_body',
  layoutRegions: {nav: 'nav',footer:'footer'},
  contentRegion: 'main',
  redirect: '/'
});
