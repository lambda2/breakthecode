
Questions = new Meteor.Collection("questions");
Parties = new Meteor.Collection("parties");
Queue = new Meteor.Collection("queue");

Queue.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});

Meteor.methods({
	uploadFile: function (file) {
		file.save('/nfs/zfs-student/users/2013/aaubin/Dev/Web/breakthecode/public');
	}
});