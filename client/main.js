// Client entry point, imports all client code
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'


import '/imports/startup/client';
import '/imports/startup/both';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';

$().ready(() => {
  $('.col-md-offset-3').addClass('offset-md-3');
  $('.btn-default').addClass('btn-secondary');
});
