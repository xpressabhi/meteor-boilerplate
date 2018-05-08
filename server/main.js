// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';

const postSignUp = function postSignUp(userId, info) {
    //  console.log(userId);
    //  console.log(info.profile);
    if (info.profile && info.profile.type && info.profile.type === 'another') {
      Roles.addUsersToRoles(userId, ['another']);
    } else {
      Roles.addUsersToRoles(userId, ['user']);
    }
    const count = Meteor.users.find().count();
    if(count ===1){
      Roles.addUsersToRoles(userId, ['admin']);
    }
};


AccountsTemplates.configure({
    postSignUpHook: postSignUp,
});
