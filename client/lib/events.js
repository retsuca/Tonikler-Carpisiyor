Template.adminView.events({
  'click .selectable': function(){
    var titleId = this._id;
    var selectedTitle = Session.get('selectedTitle');

    if(titleId == selectedTitle){
      Session.set('selectedTitle', "");
    }
    else Session.set('selectedTitle', titleId);
  },
  'click .remove': function(){
    var selectedTitle = Session.get('selectedTitle');
    postList.remove(selectedTitle);
}
});

Template.postList.events({
  'click .selectable': function(){
    var titleId = this._id;
    var selectedTitle = Session.get('selectedTitle');

    if(titleId == selectedTitle){
      Session.set('selectedTitle', "");
    }
    else Session.set('selectedTitle', titleId);
  },
});

Template.addContent.events({
  'submit form': function(event){
    event.preventDefault();
    var Title = event.target.title.value;
    var Content = event.target.content.value;
    postList.insert({
         Title: Title,
         Content: Content,
         created: new Date().getTime()
     });
  }
});

Template.editContent.events({
  "submit form": function(event){
    event.preventDefault();
    var selectedTitle = Session.get('selectedTitle');
    var Title = event.target.title.value;
    var Content = event.target.content.value;
    postList.update(selectedTitle, {$set: {Title: Title, Content: Content}});
  }
});

Template.comment.events({
  "submit form": function(event){
    event.preventDefault();
    var selectedTitle = this._id;
    var titleId = selectedTitle;
    var Comment = event.target.comment.value;
    comment.insert({
         titleId: titleId,
         Comment: Comment,
         created: new Date().getTime()
     });
  }
});
