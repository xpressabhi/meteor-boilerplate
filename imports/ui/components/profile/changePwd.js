import './changePwd.html';

Template.changePwd.onCreated(function() {
  this.changePwdMsg = new ReactiveVar('');
  this.successPwdMsg = new ReactiveVar('');
});

Template.changePwd.events({
  'submit .change-pwd-form'(event, templateInstance) {
    templateInstance.changePwdMsg.set('');
    templateInstance.successPwdMsg.set('');
    event.preventDefault();
    const target = event.target;
    const oldPwd = target.oldPwd.value;
    target.oldPwd.value = '';
    const newPwd = target.newPwd.value;
    target.newPwd.value = '';
    const retypePwd = target.retypePwd.value;
    target.retypePwd.value = '';
    if (oldPwd === newPwd) {
      templateInstance.changePwdMsg.set('Both passwords are same.');
      return;
    }
    if (retypePwd !== newPwd) {
      templateInstance.changePwdMsg.set('New passwords are not same.');
      return;
    }
    Accounts.changePassword(oldPwd, newPwd, function(error) {
      if (error) {
        console.log(error);
        if (error.error === 403)
          templateInstance.changePwdMsg.set(error.reason);
        else templateInstance.changePwdMsg.set('Error while changing password.');
      } else {
        templateInstance.successPwdMsg.set('Password changed.');
      }
    });
  }
});

Template.changePwd.helpers({
  pwdChangeMsg() {
    return Template.instance().changePwdMsg.get();
  },
  successPwdMsg() {
    return Template.instance().successPwdMsg.get();
  }
});