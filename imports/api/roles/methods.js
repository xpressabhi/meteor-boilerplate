import {
  Meteor
} from 'meteor/meteor';
Meteor.methods({
  'role.toggle'(id, role) {
    check(id, String);
    check(role, String);
    if (id != this.userId && Roles.userIsInRole(this.userId, ['super'])) {
      if (Roles.userIsInRole(id, role)) {
        Roles.removeUsersFromRoles(id, role);
      } else {
        Roles.createRole(role, {
          unlessExists: true
        });
        Roles.addUsersToRoles(id, role);
      }
    }
  },
  'role.new'(a) {
    //  if (Roles.userIsInRole(this.userId, ['super'])) {
    Roles.createRole(a, {
      unlessExists: true
    });
    //  }
  },
  'role.assignToUser'(a, b) {
    if (Roles.userIsInRole(this.userId, ['super'])) {
      Roles.addRolesToParent(a, b);
    }
  },
  'clean'() {
    Meteor.roles.remove({});
    Meteor.roleAssignment.remove({});
    Meteor.users.remove({});
    Roles._forwardMigrate()
    Roles._forwardMigrate2()
  }
});