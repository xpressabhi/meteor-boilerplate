import {
  Meteor
} from 'meteor/meteor';
Meteor.methods({
  'role.makeadmin'(id) {
    const role = 'admin';
    if (id != this.userId && Roles.userIsInRole(this.userId, ['super'])) {
      if (Roles.userIsInRole(id, role)) {
        Roles.removeUsersFromRoles(id, role);
      } else {
        Roles.addUsersToRoles(id, role);
      }
    }
  },
  'role.toggle'(id, role) {
    check(id, String);
    check(role, String);
    if (id != this.userId && Roles.userIsInRole(this.userId, ['admin'])) {
      if (Roles.userIsInRole(id, role)) {
        Roles.removeUsersFromRoles(id, role);
      } else {
        Roles.addUsersToRoles(id, role);
      }
    }
  },
  'role.create'(role) {
    if (Roles.userIsInRole(this.userId, ['super'])) {
      Roles.createRole(role, {
        unlessExists: true
      });
    }
  },
  'role.addRolesToParent'(child, parent) {
    if (Roles.userIsInRole(this.userId, ['super'])) {
      Roles.createRole(child, {
        unlessExists: true
      });
      Roles.createRole(parent, {
        unlessExists: true
      });
      Roles.addRolesToParent(child, parent);
    }
  },
  'role.removeRolesFromParent'(child, parent) {
    if (Roles.userIsInRole(this.userId, ['super'])) {
      Roles.removeRolesFromParent(child, parent);
    }
  }
  // 'clean'() {
  //   Meteor.roles.remove({});
  //   Meteor.roleAssignment.remove({});
  //   Meteor.users.remove({});
  //   Roles._forwardMigrate()
  //   Roles._forwardMigrate2()
  // }
});