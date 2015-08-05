Template.postList.helpers({
  'posts': function(){
    return postList.find({}, {sort: {created:-1}})
   }
});

Template.adminView.helpers({
  'posts': function(){
    return postList.find()
  },
  'selectedClass': function(){
      var titleId = this._id;
      var selectedTitle = Session.get('selectedTitle');
      if(titleId == selectedTitle){
          return "selected"
      }
  },
  'showSelectedTitle': function(){
    var titleId = this._id;
    var selectedTitle = Session.get('selectedTitle');

    if(titleId == selectedTitle){
      return postList.findOne(selectedTitle)
    }
  }
});
