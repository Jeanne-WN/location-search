var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  el: '#results',

  initialize: function(model){
    this.model = model;
    this.model.on('change:locations', _.bind(this.render, this));
  },

  events: {
    'click .like': 'like'
  },

  render: function(){
    var template = $('#search-result-template').html();
    var compiled = _.template(template);

    var html = compiled(this.model.toJSON());

    this.$el.html(html);

    return this.$el;
  },

  like: function(e){
    e.preventDefault();

    var name = $('h5', e.currentTarget.parentElement).text();

    var liked_location = _.first(_.where(this.model.get('locations'), {name: name}));
    liked_location.liked = !liked_location.liked;

    var liked = this.model.get('liked');
    if(liked_location.liked) {
      liked.push(liked_location);
    }else{
      liked = _.reject(liked, function(l){ return l.name == liked_location.name });
    };

    this.model.set('liked', liked);
    this.model.trigger('change:locations');
    this.model.trigger('change:liked');
  }
});
