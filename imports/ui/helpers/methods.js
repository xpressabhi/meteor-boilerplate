export const animatecss = (et, effect, delay) => {
  const cls = 'animated ' + effect;
  $(et).addClass(cls);
  Meteor.setTimeout(function() {
    $(et).removeClass(cls);
  }, delay || 2000);
}
export const dateInRange = function(days) {
  const start = new Date();
  start.setDate(start.getDate() - days);
  start.setHours(0, 0, 0, 0);
  if (days > 31) start.setDate(1);
  return start;
}

export const username = (id) => {
  const user = Meteor.users.findOne(id);
  return user && user.profile && user.profile.name || 'NoName';
}

const animate = (node, animationName, callback) => {
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName)
    node.removeEventListener('animationend', handleAnimationEnd)

    if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}
export const animateCSSNode = (node, animationName, callback) => animate(node, animationName, callback);
export const animateCSS = (element, animationName, callback) => animate(document.querySelector(element), animationName, callback)

export const pad = n => n < 10 ? `0${n}` : n;