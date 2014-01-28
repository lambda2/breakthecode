Router.configure({
	layout: 'layout'
});

Router.map(function()
{

  // The manager URL
  this.route('manage', {
  	path: '/manage',
  	template: 'manage',
  	before: function ()
  	{
  		/*
  		Un petit hook qui va etre apelle avant le routing vers /manage.
  		Si jamais pas d'user et/ou pas admin, on redirige vers HOME
		*/
  		if (!Meteor.user() || (Meteor.user().profile
  			&& !Meteor.user().profile.admin))
  		{
	        // render the login template but keep the url in the browser the same
	        this.render('home');
	        // stop the rest of the before hooks and the action function 
	        this.stop();
	    }
	},
});

  this.route('home', {
  	path: '/:error?',
  	template: 'home'
  });

});