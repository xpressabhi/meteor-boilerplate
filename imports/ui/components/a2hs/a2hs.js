import './a2hs.html';
import Clipboard from 'clipboard';

Template.a2hs.onRendered(function() {
  const clipboard = new Clipboard('.copy-link');
});

Template.a2hs.events({
  'click .copy-link'(event, templateInstance) {
    event.currentTarget.innerHTML = '<i class="fas fa-clipboard-check"></i> Copied';
    $(event.currentTarget).addClass('animated swing');
  }
});
Template.a2hs.helpers({
  isStandalone() {
    return window.navigator.standalone === true;
  },
  iPhone() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  isSafari() {
    return !!window.ApplePaySession;
  },
  isAndroid() {
    return navigator.userAgent.match(/android/i);
  },
  isMobile() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }
});