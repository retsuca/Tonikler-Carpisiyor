Router.configure({
    layoutTemplate: 'main'
});

Router.route('/admin', {
  template: 'adminView'
});
Router.route('/', {
    template: 'postList'
});
