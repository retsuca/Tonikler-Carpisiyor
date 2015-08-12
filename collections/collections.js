postList = new Mongo.Collection('Postlist');
Schemas = {};

Schemas.postList = new SimpleSchema({
  Title: {
    type: String,
    max: 60
  },
  Content: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor'
      }
    }
  },
  category: {
    type: String,
    allowedValues: ["Genel", "Teknoloji", "Nasıl Yapsam", "Yazılım", "Oyun", "İnternet", "Mobil"]
  },
  createdAt: {
    type: Date,
    label: 'Date',
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  owner: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoValue: function () {
      if (this.isInsert) {
        return Meteor.userId();
      }
    },
    autoform: {
      options: function () {
        _.map(Meteor.users.find().fetch(), function (user) {
          return {
            label: user.emails[0].address,
            value: user._id
          };
        });
      }
    }
  }
});

postList.attachSchema(Schemas.postList);

comment = new Mongo.Collection('comment');
