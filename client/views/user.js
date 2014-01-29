/*
** Users's home
*/


Template.user.helpers(
{
	attente : function()
	{
		var status = Queue.find({user_id : Meteor.userId()}).fetch();
		if (status)
			return (status[0].status == "attente");
		else
			return false;
	},
	en_jeu : function()
	{
		var status = Queue.find({user_id : Meteor.userId()}).fetch();
		if (status)
			return (status[0].status == "en_jeu");
		else
			return false;
	},
	status : function()
	{
		return (Queue.find({user_id : Meteor.userId()}));
	},
	nb_users : function()
	{
		return (Queue.find().count());
	}
});