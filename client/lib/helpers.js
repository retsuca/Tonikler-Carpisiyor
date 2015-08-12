Template.postList.helpers({
  'posts': function(){
    return postList.find({}, {sort: {createdAt:-1}});
  }
});

Template.comment.helpers({
  'comments': function(){
    return comment.find();
  }
});

Template.replyComment.helpers({
  'replyComments': function(){
    return comment.find();
  }
});

Template.post.helpers({
  'posts': function(){
    return postList.find({}, {sort: {createdAt:-1}});
  },
  'renderComment': function(){
    postCount = postList.find().fetch().length;
    if(postCount>1){
      return false;
    }
    else return true;
  }
});
