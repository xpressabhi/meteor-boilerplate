import './nav.html';

import {
  animateCSS,
  animateCSSNode
} from '/imports/ui/helpers/methods.js';

Template.mainNav.onCreated(function navOnCreated() {
  // counter starts at 0
});

Template.mainNav.onRendered(function() {
  const path = FlowRouter.current().path.split('/')[1];
  $('.active').removeClass('active');
  $(`a[href$="/${path}"]`).addClass('active');
});


Template.mainNav.events({
  'click .logout': () => {
    AccountsTemplates.logout();
    FlowRouter.go('/');
  },
  'click .nav-link'(e, t) {
    $('.active').removeClass('active');
    $(t.currentTarget).addClass('active');
    animateCSSNode(e.currentTarget, 'jello');
  }

});
Template.userNav.events({
  'click .nav-link'(e, t) {
    $('.active').removeClass('active');
    $(t.currentTarget).addClass('active');
    animateCSSNode(e.currentTarget, 'jello');
  }
});