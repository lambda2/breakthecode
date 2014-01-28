Questions = new Meteor.Collection("questions");
Parties = new Meteor.Collection("parties");

Template.manage.helpers(
{
	nb_users: function()
	{
		return (Meteor.users.find().count());
	},
	questions: function()
	{
		
		if (Questions.find().fetch().length == 0)
		{

			var questions = 
			[
				{
					question : "Qui est l'auteur(e) de James Bond ?",
					reponses : [
						{reponse : "Ian Fleming", valid : true},
						{reponse : "Arthur Conan Doyle", valid : false},
						{reponse : "Mary Shelley", valid : false},
						{reponse : "Marc LŽvy", valid : false},
					],
					categorie : "Culture Generale"
				},
				{
					question : "Quelle est la capitale du Bouthan ?",
					reponses : [
						{reponse : "Thimphu", valid : true},
						{reponse : "Kuala Lampur", valid : false},
						{reponse : "Bandar Seri Begawan", valid : false},
						{reponse : "Tegucigalpaga", valid : false},
					],
					categorie : "Culture Generale"
				},
				{
					question : "A quelle adresse se situe le bureau de Sherlock Holmes ?",
					reponses : [
						{reponse : "10 Downing Street", valid : false},
						{reponse : "221b Baker Street", valid : true},
						{reponse : "76 Totters Lane", valid : false},
						{reponse : "36 quai des Orfèvres", valid : false},
					],
					categorie : "Culture Generale"
				}
			]
			_.each(questions, function(value, key, list){
				console.log("value = ", value);
				Questions.insert(value);
			});
		}
		else
		{
			console.log("ya des trucs");
		}
		console.log(Questions.find({}).fetch());
		return Questions.find({}).fetch();
	}
});

Template.manage.events(
{
	'click #button_start': function(event, template)
	{
		console.log("Debut du quizz !");
	}
});
