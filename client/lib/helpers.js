Template.postList.helpers({
  'posts': function(){
    return postList.find({}, {sort: {createdAt:-1}});
  },
  'showSelected': function(){
    var titleId = this._id;
    var selectedTitle = Session.get('selectedTitle');

    if(titleId == selectedTitle){
      return postList.findOne(selectedTitle);
    }
  }
});

Template.adminView.helpers({
  'posts': function(){
    return postList.find();
  },
  'selectedClass': function(){
      var titleId = this._id;
      var selectedTitle = Session.get('selectedTitle');
  },
  'showSelected': function(){
    var titleId = this._id;
    var selectedTitle = Session.get('selectedTitle');

    if(titleId == selectedTitle){
      return postList.findOne(selectedTitle);
    }
  }
});

Template.comment.helpers({
  'comments': function(){
    return comment.find();
  },
  'showSelected': function(){
    var titleId = this.titleId;
    var selectedTitle = Session.get('selectedTitle');

    if(titleId == selectedTitle){
      return selectedTitle;
    }
    else if(this._id == titleId)
    {
      return selectedTitle;
    }
  }
});
