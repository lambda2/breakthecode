
Questions = new Meteor.Collection("questions");

Template.manage.helpers(
{
  test_variable: function() {
    return 'Ceci est une variable de test qui est envoyee dans le template "manage"'
  },
  questions: function()
  {
  	var q = Questions.find().fetch();
  	if (q.length == 0)
  	{
  		//console.log("ya rien dans la bdd !");
  		// var questions = 
		// [
		// 	{
		// 		question : "Qui est l'auteur(e) de James Bond ?",
		// 		reponses : [
		// 			{reponse : "Ian Fleming", valid : true},
		// 			{reponse : "Arthur Conan Doyle", valid : false},
		// 			{reponse : "Mary Shelley", valid : false},
		// 			{reponse : "Marc LŽvy", valid : false},
		// 		],
		// 		categorie : "Culture Generale"
		// 	}
		// ]
		// Questions.insert({
		// 		question : "Qui est l'auteur(e) de James Bond ?",
		// 		reponses : [
		// 			{reponse : "Ian Fleming", valid : true},
		// 			{reponse : "Arthur Conan Doyle", valid : false},
		// 			{reponse : "Mary Shelley", valid : false},
		// 			{reponse : "Marc LŽvy", valid : false},
		// 		],
		// 		categorie : "Culture Generale"
		// 	});
  	}
  	else
  	{
  		console.log("ya de trucs");
  	}
  	return (Questions.find().fetch());
  }
});
