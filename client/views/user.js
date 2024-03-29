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
	var t = 100;
	if (!Session.get("user_timer") && $('#timer-user').val() == t)
	{
		console.log("rendering !");
		Session.set("user_timer", "launched");
		
		var id = Meteor.setInterval(function () {
			if (t <= 0) {
				Meteor.clearInterval(id);
				Session.set("user_timer", undefined);
			}
			else
			{
				t--;
				$('#timer-user').val(t);
			}
		}, 100);
	}
}


Template.qcmDisplay.events({
	'click #first': function (event, tmpl) {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();

		Queue.update({_id : queue[0]._id}, {$set : {
			reponse: 0
		}});
		$("#second,#third,#last").removeClass("green");
		$("#first").addClass("green");
	},
	'click #second': function (event, tmpl) {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();

		Queue.update({_id : queue[0]._id}, {$set : {
			reponse: 1
		}});
		$("#first,#third,#last").removeClass("green");
		$("#second").addClass("green");

	},
	'click #third': function (event, tmpl) {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();

		Queue.update({_id : queue[0]._id}, {$set : {
			reponse: 2
		}});
		$("#first,#second,#last").removeClass("green");
		$("#third").addClass("green");
	},
	'click #last': function (event, tmpl) {
		var queue = Queue.find({user_id : Meteor.userId()}).fetch();

		Queue.update({_id : queue[0]._id}, {$set : {
			reponse: 3
		}});
		$("#first,#second,#third").removeClass("green");
		$("#last").addClass("green");
	}
});
