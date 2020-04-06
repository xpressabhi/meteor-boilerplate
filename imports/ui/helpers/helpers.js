import './Chronos.js';
import moment from 'moment';
const TR = Template.registerHelper;
TR('br2newline', s => s.replace(/<br\s*\/?>/mg, "\n"));
TR('$lt', (a, b) => a < b);
TR('$lte', (a, b) => a <= b);
TR('$gt', (a, b) => a > b);
TR('$gte', (a, b) => a >= b);
TR('$and', (a, b) => a && b);
TR('$or', (a, b) => a || b);
TR('$not', a => !a);
TR('$eq', (a, b) => a === b);
TR('$neq', (a, b) => a !== b);
TR('add', (a, b) => Number(a) + (Number(b) || 1));
TR('percent', (a, b) => parseFloat(((Number(a) * 100) / Number(b)).toFixed(2)));
TR('sub', (a, b) => Number(a) - Number(b));
TR('devide', (a, b) => a && Number(b) && a / b || 0);
TR('multiply', (a, b) => a && b && a * b || 0);
TR('param', (a = 'id') => FlowRouter.getParam(a));
TR('queryparam', (a = 'id') => FlowRouter.getQueryParam(a));
TR('doclocation', a => location[a]);
TR('timeFrom', d => moment().from(d));
TR('timeDiff', (a, b) => a && b && moment(a).diff(moment(b), 'minutes'));
TR('includes', (a, b) => a && a.includes(b));
TR('webShare', () => navigator.share);
TR('abcd', n => String.fromCharCode(65 + n));
TR('stringify', a => JSON.stringify(a, null, 2));
TR('logthis', me => console.log(me));
TR('firstCapital', s => s.charAt(0).toUpperCase() + s.substr(1));
TR('userIsInRole', (user, role) => Roles.userIsInRole(user, role));
TR('dayDateTime', dt => moment(dt).format('dddd MMMM Do, h:mm A'));
TR('calendar', dt => moment(dt).calendar());
TR('getCountSpecial', (s1, s2) => Counts.get(s1 + s2));
TR('getCount', s => Counts.get(s));

TR('shortText', function(html, len) {
  const span = document.createElement('span');
  span.innerHTML = html;
  let text = span.textContent || span.innerText;
  return html && text.length > len ? text.substr(0, Math.max(len - 3, 0)) + '...' : text;
});


TR('firstWord', function(name = 'NoName') {
  const [fname] = name.trim().split(' ');
  return fname.length > 12 ? `${fname.slice(0,9)}..` : fname;
});

TR('profilename', function(userId) {
  const user = Meteor.users.findOne(userId);
  return user && user.profile && user.profile.name;
});


TR('betterDate', dt => moment(dt).format("ddd MMM Do YYYY"));
TR('dateTime', dt => moment(dt).format('MMMM Do YYYY, h:mm a'));

TR('userEmail', (id) => {
  const user = Meteor.users.findOne({
    _id: id
  });
  return user && user.emails && user.emails[0].address;
});