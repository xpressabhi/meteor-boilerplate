// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.

const myLogoutFunc = function() {
  FlowRouter.go('/login');
}

AccountsTemplates.configure({
  // Behavior
  confirmPassword: true,
  sendVerificationEmail: true,
  socialLoginStyle: "popup",
  // Appearance
  showForgotPasswordLink: true,
  showLabels: true,
  showPlaceholders: true,
  //showResendVerificationEmailLink: true,

  // Client-side Validation
  continuousValidation: true,

  // Privacy Policy and Terms of Use
  //privacyUrl: '/privacy',
  //termsUrl: '/tos',

  // Redirects

  // Hooks
  onLogoutHook: myLogoutFunc,

  // Texts
  texts: {
    button: {
      signUp: "Register"
    },
    socialIcons: {
      google: "fab fa-google",
      facebook: "fab fa-facebook",
      "meteor-developer": "myMeteorIcon",
    },
    signUpLink_pre: "Didn't register here yet?",
    signUpLink_link: "Register",
    title: {
      signIn: "",
      signUp: ""
    },
  },
});

const pwd = AccountsTemplates.removeField('password');
const email = AccountsTemplates.removeField('email');

const name = {
  _id: 'name',
  type: 'text',
  displayName: 'Name',
  required: true,
  minLength: 3,
  trim: true,
  placeholder: {
    signUp: "Full Name",
    signIn: "Full Name"
  }
}
const refCodeBy = {
  _id: 'refCodeBy',
  type: 'hidden',
  displayName: 'Referral Code',
  minLength: 4,
  maxLength: 8,
  re: /^[a-z0-9]+$/,
  trim: true,
  lowercase: true,
  placeholder: {
    signUp: "Invite Code. "
  }
}

AccountsTemplates.addFields([name, email, pwd, refCodeBy]);

AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signin',
  path: '/login',
  template: 'customAtForm',
  layoutTemplate: 'App_body',
  layoutRegions: {
    nav: 'nav',
    footer: 'footer'
  },
  contentRegion: 'main'
});

AccountsTemplates.configureRoute('signUp', {
  layoutType: 'blaze',
  name: 'signup',
  path: '/sign-up',
  template: 'customAtForm',
  layoutTemplate: 'App_body',
  layoutRegions: {
    nav: 'nav',
    footer: 'footer'
  },
  contentRegion: 'main'
});

AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPwd',
  path: '/reset-password',
  layoutType: 'blaze',
  template: 'customAtForm',
  layoutTemplate: 'App_body',
  layoutRegions: {
    nav: 'nav',
    footer: 'footer'
  },
  contentRegion: 'main'
});

AccountsTemplates.configureRoute('forgotPwd', {
  layoutType: 'blaze',
  name: 'forgotPwd',
  path: '/forgot-password',
  template: 'customAtForm',
  layoutTemplate: 'App_body',
  layoutRegions: {
    nav: 'nav',
    footer: 'footer'
  },
  contentRegion: 'main'
});

AccountsTemplates.configureRoute('verifyEmail', {
  name: 'verifyEmail',
  path: '/verify-email',
  layoutType: 'blaze',
  template: 'customAtForm',
  layoutTemplate: 'App_body',
  layoutRegions: {
    nav: 'nav',
    footer: 'footer'
  },
  contentRegion: 'main'
});