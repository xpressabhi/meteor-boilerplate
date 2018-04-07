import { Meteor } from 'meteor/meteor';

const fields = {fields:{emails:1,createdAt: 1}};

const options = {
  sort: {
    createdAt: -1
  },
  fields: {
    emails: 1,
    roles: 1,
    createdAt: 1
  },
  limit: 50
};
Meteor.publish("user.byids", function(ids){
  check(ids, [String]);
  return Meteor.users.find({_id:{$in:ids}},options);
});

Meteor.publish("user.one", function(id){
  check(id, String);
  return Meteor.users.find({_id:id},options);
});

Meteor.publish('users.all', function () {
  return Meteor.users.find({},options);
});

Meteor.publish('users.search', function (query) {
  check(query,String);
  let regex = new RegExp(query, 'i');
  if(!query || query===''){
    return Meteor.users.find({},options);
  }
  if(query)
    return Meteor.users.find({"emails.address": regex},options);
  return this.ready();
});

Meteor.publish('user.counts', function() {
  Counts.publish(this, 'allUsers', Meteor.users.find({}));
});
