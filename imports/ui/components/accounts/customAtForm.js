import './customAtForm.html';

Template.customAtForm.onRendered(function() {
  const code = FlowRouter.getQueryParam('refCodeBy');
  $('.btn-default').addClass('btn-primary');
});