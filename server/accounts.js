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
	user.profile = {
		admin: false,
		active: true
	};
	return user;
});
