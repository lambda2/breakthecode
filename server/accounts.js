/*
**
** User account intializing
**
** @author: Stephane Barale <stephane.barale@gmail.com>
*/

/*
** Define the administrator
*/
Accounts.onCreateUser(function (options, user) {
	if (Meteor.users.find({profile: {admin: true} }).count() == 0) {
		user.profile = {
			admin: true
		}
	}
	else {
		user.profile = {
			admin: false,
			type: "user",
			picture: false,
			groupname: false
		}
	}
	return user;
});
