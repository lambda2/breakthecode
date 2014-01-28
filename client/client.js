/*
** Redirect user depending on his type
**
** @author: Stephane Barale <stephane.barale@gmail.com>
*/
/*
if (Meteor.user) {
	if (Meteor.user() && Meteor.user().profile.admin == true) {
		Router.go('manage');
	}
	else if (Meteor.user() && !Meteor.user().profile.admin) {
		Template.home.helpers({
			error: function () {
				return "You don't have permission to acces '/manage'.";
			}
		});
	}
}
else {
	Router.go('home');
}
*/