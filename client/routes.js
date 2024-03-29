/*
** Router
*/

Router.configure({
	layout: 'layout'
});

Router.map(function() {

	// The manager URL
	this.route('manage', {
		path: '/manage',
		template: 'manage',
		before: function () {
			/*
			Un petit hook qui va etre apelle avant le routing vers /manage.
			Si jamais pas d'user et/ou pas admin, on redirige vers HOME
			*/
			if (!Meteor.user() || (Meteor.user().profile
				&& !Meteor.user().profile.admin)) {
				// render the login template but keep the url in the browser the same
				Router.go('home', {error: 1});
				// stop the rest of the before hooks and the action function 
				this.stop();
			}
		},
	});

	//Client page
	this.route('user', {
		path: '/user/:_id',
		before: function () {
			if (Meteor.user() && Meteor.user().profile.admin == true) {
				Router.go('manage');
				this.stop();
			}
			else if (!Meteor.user()) {
				Router.go('home', {error: 1});
				this.stop();
			}
		}
	});

	//Homepage
	this.route('home', {
		path: '/:error?',
		template: 'home',
		data: function () {
			if (this.params.error) {
				return {error: this.params.error};
			}
			else {
				return {};
			}
		},
		before: function () {
			if (Meteor.user() && (Meteor.user().profile
				&& Meteor.user().profile.admin)) {
				Router.go('manage');
				this.stop();
			}
			else if (Meteor.user()) {
				// Si l'utilisateur n'est pas dans la file d'attente, on le met !
				if (Queue.find({user_id: Meteor.userId()}).count() === 0)
				{
					Queue.insert({
						user_id : Meteor.userId(),
						status : "attente",
						question_courante : undefined,
						score : 0,
						timer: false,
						reponse: undefined,
						current_index: undefined,
						total_index: undefined,
						score_round : 0
					});
				}
				else
				{
					var id = Queue.find({user_id: Meteor.userId()}).fetch()[0];
					console.log(id);
					Queue.update(
						{_id : id._id},
						{$set : {
							status : "attente",
							question_courante : undefined,
							timer: false,
							reponse: undefined,
							current_index: undefined,
							total_index: undefined,
							score_round : 0
						}},
						{ multi: true });
				}
				Router.go('user', {_id: Meteor.userId()});
				this.stop();
			}
		}
	});
});
