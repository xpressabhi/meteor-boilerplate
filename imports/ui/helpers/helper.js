import R from 'ramda';

Template.registerHelper( 'firstCapital', (str) => {
  const fn= p=> R.toUpper(R.head(p))+R.tail(p);
  return fn(str);
});
