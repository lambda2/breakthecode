
	var QUIZZ = [
	{
		question : "Qui est l'auteur(e) de James Bond?",
		reponses : [
			{reponse : "Ian Fleming", valid : true},
			{reponse : "Arthur Conan Doyle", valid : false},
			{reponse : "Mary Shelley", valid : false},
			{reponse : "Marc Lévy", valid : false},
		],
		categorie : "Culture Générale"
	},
	{
		question : "Quelle est la capitale du Bouthan?",
		reponses : [
			{reponse : "Thimphu", valid : true},
			{reponse : "Kuala Lampur", valid : false},
			{reponse : "Bandar Seri Begawan", valid : false},
			{reponse : "Tegucigalpaga", valid : false},
		],
		categorie : "Culture Générale"
	},
	{
		question : "A quelle adresse se situe le bureau de Sherlock Holmes?",
		reponses : [
			{reponse : "10 Downing Street", valid : false},
			{reponse : "221b Baker Street", valid : true},
			{reponse : "76 Totter's Lane", valid : false},
			{reponse : "36 quai des Orfèvres", valid : false},
		],
		categorie : "Culture Générale"
	},
	{
		question : "Qu'est-ce que Dien Bien Phu?",
		reponses : [
			{reponse : "Un type de soupe aux ongles très populaire dans le Sud de la Chine", valid : false},
			{reponse : "\"bonjour\" en Essonois (patois de l'Esonne)", valid : false},
			{reponse : "Un rite japonais qui consiste à séparer les jumeaux à la naissance", valid : false},
			{reponse : "Une bataille perdue par la France en ex-Indochine", valid : true},
		],
		categorie : "Culture Générale"
	},
	{
		question : "Qu'est-ce qu'un crabe violoniste?",
		reponses : [
			{reponse : "Un crabe qui a une forme qui rappelle très vaguement un violon", valid : false},
			{reponse : "Un crabe qui émet un son relativement proche du violon", valid : false},
			{reponse : "Un crabe qui a une pince très grande et une autre très petite", valid : true},
			{reponse : "Un crabe qui fait un mouvement de pinces un peu comme s'il jouait du violon", valid : false},
		],
		categorie : "Culture Générale"
	},
	{
		question : "Qui est Dick Fosbury?",
		reponses : [
			{reponse : "Un joueur de freesbee", valid : false},
			{reponse : "L'inventeur du pistolet qui donne le top départ", valid : false},
			{reponse : "Un perchiste à la perche", valid : false},
			{reponse : "L'inventeur du saut en hauteur moderne", valid : true},
		],
		categorie : "Sport"
	},
	{
		question : "Contre quelle équipe la France a-t-elle gagné la coupe d'Europe de foot en 1984?",
		reponses : [
			{reponse : "Le Brésil", valid : false},
			{reponse : "L'Union Sportive de Créteil", valid : false},
			{reponse : "L'Afrique", valid : false},
			{reponse : "L'Espagne", valid : true},
		],
		categorie : "Sport"
	},
	{
		question : "Dans quel sport la France a-t-elle gagné le plus de médailles d'or aux JO?",
		reponses : [
			{reponse : "Handball", valid : false},
			{reponse : "Judo", valid : false},
			{reponse : "Le pourvoi en cassation", valid : false},
			{reponse : "Escrime", valid : true},
		],
		categorie : "Sport"
	},
	{
		question : "Quels sports composent le pentathlon moderne?",
		reponses : [
			{reponse : "L'escrime, la course à pied, le tir au pistolet, l'équitation et la natation", valid : true},
			{reponse : "Le lancer de poids, le 100 m, saut en hauteur et la longueur", valid : false},
			{reponse : "La danse classique, le hip hop et la samba", valid : false},
			{reponse : "Heuuu, un peu de tout", valid : false},
		],
		categorie : "Sport"
	},
	{
		question : "Quel est le sport n.1 à Cuba?",
		reponses : [
			{reponse : "La gym suédoise", valid : false},
			{reponse : "La salsa", valid : false},
			{reponse : "Le curling", valid : false},
		{reponse : "Le baseball", valid : true},
		],
		categorie : "Sport"
	},
	{
		question : "Qui est le capitaine O'Neill?",
		reponses : [
			{reponse : "Le personnage principal de Battlestar Galactica", valid : false},
			{reponse : "Le personnage principal de Stargate SG1", valid : true},
			{reponse : "Le personnage principal de Thalassa", valid : false},
			{reponse : "Le personnage principal du JT de Jean-Pierre Pernaud", valid : false},
		],
		categorie : "Divertissement"
	},
	{
		question : "Quel est le nom de la famille de mafieux dans \"Le Parrain\"?",
		reponses : [
			{reponse : "Les Sarkozy", valid : false},
			{reponse : "Les Mafieux", valid : false},
			{reponse : "Les Corleone", valid : true},
			{reponse : "Je n'ai pas vu le film", valid : false},
		],
		categorie : "Divertissement"
	},
	{
		question : "Quel objectif n'a jamais fait partie des priorités des Anges de la Téléréalité?",
		reponses : [
			{reponse : "Devenir une \"star\"", valid : false},
			{reponse : "Devenir un chanteur", valid : false},
			{reponse : "Devenir un mannequin", valid : false},
			{reponse : "Devenir un proctologue", valid : true},
		],
		categorie : "Divertissement"
	},
	{
		question : "Quelle émission de téléréalité n'a jamais existé?",
		reponses : [
			{reponse : "Génération Mannequin", valid : false},
			{reponse : "Bouillon de Culture", valid : false},
			{reponse : "Les Chtis à l'Elysée", valid : true},
			{reponse : "Poker: Mission Caraïbes", valid : false},
		],
		categorie : "Divertissement"
	},
	{
		question : "Complétez cet extrait de la chanson \"Ma liberté de penser\" de Florent Pagny: \"Quitte à tout prendre, prenez mes gosses et \"?",
		reponses : [
			{reponse : "Mon poing dans la figure", valid : false},
			{reponse : "Mon pied dans le derrière", valid : false},
			{reponse : "Ma liberté de penser", valid : false},
			{reponse : "Ma télé", valid : true},
		],
		categorie : "Divertissement"
	},
	{
		question : "Pourquoi parle-t-on d'une stabilisation de la courbe du chômage?",
		reponses : [
			{reponse : "Parce que Jean-Marc Ayrault le dit", valid : false},
			{reponse : "Parce que Michel Sapin le dit", valid : false},
			{reponse : "Parce que Pierre Moscovici le dit", valid : false},
			{reponse : "Parce que la courbe décrivant l'évolution mensuelle du nombre des nouveaux demandeurs d'emploi semble décrire une augmentation plus faible sur les 3 derniers mois de 2013, d'où stabilisation.", valid : true},
		],
		categorie : "Actualités"
	},
	{
		question : "Quel ancien pilote de Formule 1 vient de subir un accident grave en ski?",
		reponses : [
			{reponse : "Jean-Marc Ayrault", valid : false},
			{reponse : "Jean Alési", valid : false},
			{reponse : "Michael Schumacher", valid : true},
			{reponse : "Valérie Trierweiler", valid : false},
		],
		categorie : "Actualités"
	},
	{
		question : "Pourquoi il y a-t-il des manifestations en Ukraine?",
		reponses : [
			{reponse : "Because the rent is too damn high", valid : false},
			{reponse : "Par désaccord vis-à-vis de la décision prise par le président Yanoukovitch de suspendre les négociations avec L'UE", valid : true},
			{reponse : "Parce que les ukrainiens aiment manifester", valid : false},
			{reponse : "Parce la réforme des retraites n'est qu'un arbre qui cache la forêt des déficits", valid : false},
		],
		categorie : "Actualités"
	},
	{
		question : "Qui vient de rafler 5 Grammy lors des Grammy awards dimanche dernier?",
		reponses : [
			{reponse : "Florent Pagny", valid : false},
			{reponse : "Britney Spears", valid : false},
			{reponse : "One Direction", valid : false},
			{reponse : "Daft Punk", valid : true},
		],
		categorie : "Actualités"
	},
	{
		question : "Quel ingrédient ne rentre pas dans la composition du Bloody Mary?",
		reponses : [
			{reponse : "Du Celeri", valid : false},
			{reponse : "Du sang", valid : true},
			{reponse : "De la Worcestershire sauce", valid : false},
			{reponse : "De la sauce Piri Piri", valid : false},
		],
		categorie : "Alcool"
	},
	{
		question : "Dans quel pays consomme-t-on le plus de Vodka?",
		reponses : [
			{reponse : "Chez Gérard Depardieu, rue du Cherche-midi, 75007 Paris", valid : false},
			{reponse : "En Russie", valid : true},
			{reponse : "En Iran", valid : false},
			{reponse : "En Pologne", valid : false},
		],
		categorie : "Alcool"
	},
	{
		question : "En Russie (encore), que mange-t-on traditionnellement avec de la vodka?",
		reponses : [
			{reponse : "Rien, la vodka se suffit à elle-même", valid : false},
			{reponse : "Un cœur de cheval encore frémissant", valid : false},
			{reponse : "Des chips", valid : false},
			{reponse : "Des cornichons", valid : true},
		],
		categorie : "Alcool"
	},
	{
		question : "Quel cocktail peut se préparer avec du Havana club?",
		reponses : [
			{reponse : "Un cocktail Molotov", valid : false},
			{reponse : "Une sangria", valid : false},
			{reponse : "Aucun, je bois à la bouteille", valid : false},
			{reponse : "Un daiquiri", valid : true},
		],
		categorie : "Alcool"
	},
	{
		question : "Quel type de rhum produit-on le plus en France?",
		reponses : [
			{reponse : "Du Rhum de type O+", valid : false},
			{reponse : "Du Rhum agricole", valid : true},
			{reponse : "On ne produit pas de rhum en France", valid : false},
			{reponse : "Du Rhume", valid : false},
		],
		categorie : "Alcool"
	}
];

// Un petit helper qui va nous retourner nos questions.
var getSelectedQuestions = function()
{
		// Si on a pas selectionne de round, on affiche toutes les questions
		if (Session.get("selected_round") == undefined)
		{
			return Questions.find({}).fetch();
		}
		else
		{
			var cat = Session.get("selected_round");
			console.log("On va fetch avec la categorie " + cat, cat);
			return Questions.find({categorie : cat}).fetch();
		}
};

var initNewGame = function()
{
	Session.set("current_questions", getSelectedQuestions());
	Session.set("question_index", 0);
	Session.set("quizz_state", "en_jeu");
	var in_queue = Queue.find({status : "attente"}).fetch();
	var current_q = Session.get("current_questions");
	_.each(in_queue, function(value, key, list){
		console.log("updating ", value);
		Queue.update({_id : value._id}, {$set : {
			status : "en_jeu",
			question_courante : current_q[0]
		}});
	});
};

var getCurrentQuestion = function()
{
	if (Session.get("current_questions") != undefined
		&& Session.get("question_index") != undefined)
	{
		var current_q = Session.get("current_questions");
		return (current_q[Session.get("question_index")]);
	}
	else
	{
		return ;
	}
}

Template.manage.helpers(
{
	nb_users: function()
	{
		return (Queue.find().count());
	},
	series: function()
	{
		var elts = Questions.find().fetch();
		var o = (_.groupBy(elts, function(e){ return e.categorie }));
		return _.keys(o);
	},
	questions: function()
	{
		// Si les questions n'existent pas, on les ajoute dans la bdd.
		if (Questions.find().fetch().length == 0)
		{
			_.each(QUIZZ, function(value, key, list){
				console.log("value = ", value);
				Questions.insert(value);
			});
		}
		return (getSelectedQuestions());
	},
	isWaiting: function()
	{
		if (!Session.get("quizz_state") || Session.get("quizz_state") == "attente")
		{
			return true;
		}
		else
		{
			return false;
		}
	}
});

Template.manage.events(
{
	'click [class^="series_filter_"]': function(event, template)
	{
		Session.set("selected_round", _.reduce(this, function(l, r){
			return l + r;
		}));
	},
	'click #button_start': function(event, template)
	{
		initNewGame();
		console.log("Debut du quizz !");
	}
});

var launchTimer = function(callback)
{
	var e = Meteor.setInterval(function()
	{
		if (Session.get("quizz_timer") <= 0)
		{
			Meteor.clearInterval(e);
			callback();
		}
		else
		{
			Session.set("quizz_timer", Session.get("quizz_timer") - 1);
		}
	}, 100);
}

var nextQuestion = function()
{
	var in_queue = Queue.find({status : "en_jeu"}).fetch();
	var current_q = Session.get("current_questions");
	Session.set("question_index", Session.get("question_index") + 1);
	console.log("Passage a la question " + Session.get("question_index") + " !");
	_.each(in_queue, function(value, key, list){
		Queue.update({_id : value._id}, {$set : {
			question_courante : current_q[Session.get("question_index")]
		}});
	});
	Session.set("quizz_timer", undefined);
};

Template.roundstart.helpers({
	/*
	@TODO : Rajouter les equipes et leur scores
	*/
	teams: function()
	{
		return ([{}]);
	},
	currentQuestion: function()
	{
		console.log(getCurrentQuestion().reponses);
		return getCurrentQuestion();
	},
	timer: function()
	{
		if (!Session.get("quizz_timer"))
			return ("");
		else
			return (Session.get("quizz_timer"));
	}
});

Template.roundstart.events(
{
	'click #question_start': function(event, template)
	{
		Session.set("quizz_timer", 100);
		launchTimer(function(){
			console.log("Fin de la question !");
			nextQuestion();
		});
		console.log("Top chrono !");
	}
});











