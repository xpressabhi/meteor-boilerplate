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

export const pad = n => n < 10 ? `0${n}` : n;