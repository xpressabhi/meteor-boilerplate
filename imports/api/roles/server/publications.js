Meteor.publish(null, function() {
  if (this.userId) {
    return Meteor.roleAssignment.find({
      'user._id': this.userId
    });
  } else {
    this.ready()
  }
})

Meteor.publish("roles.users", function(ids) {
  return Meteor.roleAssignment.find({
    'user._id': {
      $in: ids
    }
  });
});