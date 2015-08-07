Router.configure({
    layoutTemplate: 'main'
});

Router.route('/adminn', {
  template: 'adminView'
});
Router.route('/', {
    name: 'home',
    template: 'postList'
});
AccountsTemplates.configureRoute('signIn', {
    path: '/login',
    template: 'Login',
    redirect: '/admin',
});

AccountsTemplates.configureRoute('signUp', {
    path: '/register',
    template: 'register',
    redirect: '/',
});

Router.route('/posts', {
  path: '/posts/:_id',
  template: 'posts',
  data: function() { return postList.findOne(this.params._id); }
});


AdminConfig = {
collections:
{
postList: {},
comment: {}
}
};
