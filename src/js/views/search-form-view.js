var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  el: '#searchForm',

  events: {
    'click #searchButton' : 'search'
  },

  initialize: function(model) {
    this.template = $('#search-form-template').html();
    this.model = model;
  },

  render: function() {
    var compiled = _.template(this.template);
    var html = compiled();
    this.$el.html(html);

    return this.$el;
  },

  search: function(e){
    e.preventDefault();

    var self = this;
    var name = $(this.$el).find('#locationInput').val();

    $.ajax({
      url: 'http://location-backend-service.herokuapp.com/locations?name=' + name,
      success: function(results){
        var searched_locations = _.map(results, function(result){
          return _.extend(result, { liked: false });
        })

        var liked = self.model.get('liked');

        self.model.set('locations', _.map(searched_locations, function(location){
          return _.first(_.where(liked, {name: location.name})) || location;
        }));
      }
    });
  }
})
