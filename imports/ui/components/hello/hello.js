import './hello.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, templateInstance) {
    // increment the counter when button is clicked
    templateInstance.counter.set(templateInstance.counter.get() + 1);
  },
});
