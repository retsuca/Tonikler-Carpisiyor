Template.adminView.events({
  'click .title': function(){
    var titleId = this._id;
    var selectedTitle = Session.get('selectedTitle');
    if(titleId == selectedTitle){
      Session.set('selectedTitle', "titleId");
    }
    else Session.set('selectedTitle', titleId);
  },
  'click .remove': function(){
    var selectedTitle = Session.get('selectedTitle');
    postList.remove(selectedTitle);
}
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
    console.log(title);
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
