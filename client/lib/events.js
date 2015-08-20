Template.comment.events({
  "submit .comment": function(event){
    event.preventDefault();
    var selectedTitle = this._id;
    var titleId = selectedTitle;
    var commentt = event.target.comment.value;
    comment.insert({
         titleId: titleId,
         comment: commentt,
         createdAt: new Date().getTime()
     });
  },
  "click .replyButton": function(){
    console.log(this);
    console.log($(this).html);
    console.log($(this).html.children('.replyComment'));
    $(this).children('.replyComment').toggle();
  }
});

Template.replyComment.events({
  "submit .reply": function(event){
    event.preventDefault();
    var parentId = this._id;
    if(typeof parentId === 'undefined')
      {
        parentId= this.disscussionId;
    }

    console.log(parentId);
    var reply = event.target.reply.value;
    comment.update({_id: parentId},
      {$push:{
         replys:{
           disscussionId: parentId,
           reply: reply,
           createdAt: new Date().getTime()}
      }
     });
  }
});
