/*
** Users's home
*/
Files = new Meteor.Collection(null);

Template.user.helpers(
{
	user_group : function () {
		return Meteor.user().profile.groupname;
	},
	take_picture : function () {
		return Meteor.user().profile.picture;
	},
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

Template.takepicture.events({
	'change input[type=file]': function (e, tmpl) {
		var input = tmpl.find('input[type=file]');
		var files = input.files;
		var file = files[0];
		var mFile;
		var queue;

		mFile = new MeteorFile(file, {
			collection: Files
		});

		Files.insert(mFile, function (err, res) {
			mFile.upload(file, "uploadFile");
		});

		queue = Queue.find({user_id : Meteor.userId()}).fetch();
		Meteor.users.update({_id : Meteor.userId()}, {$set : {
			profile: {
				admin: false,
				type: "user",
				groupname: true,
				picture: true
			}
		}});
		Queue.update({_id : queue[0]._id}, {$set : {picture_name: mFile.name}});
	}
});

Template.groupe.events({
	'change input#groupName': function (evt) {
		var name = $('.user-group input#groupName').val().trim();
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();

		Queue.update({_id : queue[0]._id}, {$set : {
			group_name: name
		}});

		Meteor.users.update({_id : Meteor.userId()}, {$set : {
			profile: {
				admin: false,
				type: "user",
				groupname: true
			}
		}});
	}
});

Template.en_jeu.helpers({
	timer: function () {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();
		return queue[0].timer;
	},
	groupname: function () {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();
		return queue[0].group_name;
	},
	grouppic: function () {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();
		return queue[0].picture_name;
	}
});

Template.qcmDisplay.helpers({
	current_index: function () {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();
		return (queue[0].current_index + 1);
	},
	total_index: function () {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();
		return (queue[0].total_index + 1);
	},
	question_courante: function () {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();
		return queue[0].question_courante;
	},
	timerUser: function () {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();
		if (queue[0].timer) {
			Session.set("user_timer", undefined);
		}
		return (100);
	}
});

Template.qcmDisplay.rendered = function () {
	if (!Session.get("user_timer")) {
		Session.set("user_timer", 100);
	}
	var id = Meteor.setInterval(function () {
		value = Session.get("user_timer");
		if (value > 0) {
			value--;
			$('#time-user').val(value);
		}
	}, 100);
	Meteor.setTimeout(function () {
		Meteor.clearInterval(id);
	}, 10000);
}


Template.qcmDisplay.events({
	'click #first': function (event, tmpl) {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();

		Queue.update({_id : queue[0]._id}, {$set : {
			reponse: 0
		}});
	},
	'click #second': function (event, tmpl) {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();

		Queue.update({_id : queue[0]._id}, {$set : {
			reponse: 1
		}});
	},
	'click #third': function (event, tmpl) {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();

		Queue.update({_id : queue[0]._id}, {$set : {
			reponse: 2
		}});
	},
	'click #last': function (event, tmpl) {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();

		Queue.update({_id : queue[0]._id}, {$set : {
			reponse: 3
		}});
	}
});
