Router.configure({
  layoutTemplate: 'main'
});
Router.map(function () {

  Router.route('/adminn', {
    template: 'adminView'
  });
  Router.route('/', {
    name: 'home',
    template: 'postList',
    subscriptions: function(){
      return Meteor.subscribe('postList');
    }
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

  Router.route('/post/:_id', {
    name: 'post',
    template: 'post',

    data: function() { return postList.findOne(this.params._id); },
    subscriptions: function(){
      return[
        Meteor.subscribe('comment',this.params._id),
        Meteor.subscribe("post", this.params._id)
      ];
    }
  });

  Router.route('/category/:_id', {
    name: 'category',
    template: 'post',

    subscriptions: function(){
      return Meteor.subscribe("category", this.params._id);
    }
  });
});
