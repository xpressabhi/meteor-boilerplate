import './body.html';
import '../../components/nav/nav.js';
import '../../components/nav/footer.js';
import '/imports/ui/components/accounts/customAtForm.js';
import '/imports/ui/helpers/helpers.js';

Template.App_body.onRendered(function() {
  $('.page-loading').remove();
});