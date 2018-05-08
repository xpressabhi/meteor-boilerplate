import {
  Meteor
} from 'meteor/meteor';
Meteor.methods({
  "users.remove": function (id) {
    check(id, String);

    if (Roles.userIsInRole(this.userId, ['admin'])) {
      if (Roles.userIsInRole(id, ['admin'])) {
        return 'Admin user cannot be deleted.';
      } else {
        console.log('deleting user.');
        Meteor.users.remove({
          _id: id
        });
      }
    }
  },
  'user.toggleRole' (id, role) {
    check(id, String);
    check(role, String);
    if (Roles.userIsInRole(this.userId, ['admin'])) {
      if (Roles.userIsInRole(id, role)) {
        Roles.removeUsersFromRoles(id, role);
      } else {
        Roles.addUsersToRoles(id, role);
      }
    }
  }
});
