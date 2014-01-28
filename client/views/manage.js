/*
** If client is not connected or not admin.
** Redirect him to homepage
*/
if (!Meteor.user || !Meteor.user.profile.admin) {
	Router.go('home', {error: 1});
}

Template.manage.helpers(
{
  test_variable: function() {
    return 'Ceci est une variable de test qui est envoyee dans le template "manage"'
  }
});
