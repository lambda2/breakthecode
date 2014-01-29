/*
** Client
*/
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
