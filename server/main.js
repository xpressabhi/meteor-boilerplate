// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';

const ROLES = ['super', 'admin', 'user'];

const postSignUp = function postSignUp(userId, info) {
  console.log(userId);
  console.log(info);
  ROLES.forEach((role, i) => {
    console.log(role);
    Roles.createRole(role, {
      unlessExists: true
    });
  });

  Roles.addUsersToRoles(userId, ['user']);
  const count = Meteor.users.find().count();
  if (count === 1) {
    console.log(count);
    Roles.addUsersToRoles(userId, ['admin']);
  }
};


AccountsTemplates.configure({
  postSignUpHook: postSignUp,
});