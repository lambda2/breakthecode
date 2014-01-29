/*
** Client
*/

//Set active to false
Meteor.logout(function () {
	if (Meteor.user() && Meteor.user().profile
		&& Meteor.user().profile.active == true) {
		Meteor.user().profile.active = function () {
			return false;
		};
	}
});

Questions = new Meteor.Collection("questions");
Parties = new Meteor.Collection("parties");
Queue = new Meteor.Collection("queue");
