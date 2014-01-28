Router.configure({
  layout: 'layout'
});

Router.map(function()
{

  // The manager URL
  this.route('manage', {
    path: '/manage',
    template: 'manage'
  });

  this.route('home', {
    path: '/:error?',
    template: 'home'
  });

});