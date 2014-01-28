Router.configure({
  layout: 'layout'
});

Router.map(function()
{

  this.route('home', {
    path: '/',
    template: 'home'
  });

  // The manager URL
  this.route('manage', {
    path: '/manage',
    template: 'manage'
  });

});

