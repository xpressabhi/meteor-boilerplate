import {Meteor} from 'meteor/meteor';
Meteor.methods({
  "users.remove": function(id) {
    if (Roles.userIsInRole(this.userId, ['admin'])) {
      if (Roles.userIsInRole(id, ['admin'])) {
        return 'Admin user cannot be deleted.';
      } else {
        console.log('deleting user.');
        Meteor.users.remove({_id:id});
      }
    }
  }
});
