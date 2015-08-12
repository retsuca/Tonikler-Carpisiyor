Meteor.publish('postList', function(){
    return postList.find();
});
Meteor.publish('comment', function(titleId) {
    return comment.find({titleId: titleId});
});
Meteor.publish('post', function(id){
    return postList.find(id);
});
Meteor.publish('category', function(category) {
    return postList.find({category: category});
});
