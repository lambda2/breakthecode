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
	if (Meteor.users.find({}).count() == 0) {
		user.profile = {
			admin: true
		};
	}
	return user;
});
