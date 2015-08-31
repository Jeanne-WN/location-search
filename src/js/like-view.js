var LikeView = Backbone.View.extend({
  el: '#likedPlaces',

  initialize: function(model){
    this.model = model;
    this.template =  $('#liked-place-template').html();
    this.model.on('change:locations', _.bind(this.render, this));
  },

  render: function(){
    var likedLocations = _.select(this.model.get('locations'), {'liked': true});

    var compiled = _.template(this.template);
    var html = compiled({likedLocations: likedLocations});
    this.$el.html(html);

    return this.$el;
  }
});
