var Backbone = require('backbone');
var $ = require('jquery');
var SearchResultView = require('../src/js/views/search-result-view');

describe('SearchResultView', function(){
  'use strict';

  var locations, searchResultView;

  beforeEach(function() {
    loadFixtures('search-results.template');

    locations = new Backbone.Model({"locations": []});

    searchResultView = new SearchResultView(locations);
  });

  it('#render', function(){
    searchResultView.render();

    expect($('#results li').length).toBe(0);

    locations.set('locations', [{
      description: "The largest city and national capital of the Netherlands (Holland).",
      name: "Amsterdam",
      liked: false
    }]);

    expect($('#results li').length).toBe(1);
    expect($('#results li .like').text()).toBe('like');
  });

  it('#like', function(){
    locations.set('locations', [{
      description: "The largest city and national capital of the Netherlands (Holland).",
      name: 'Amsterdam',
      liked: false
    }]);

    var html = searchResultView.render();

    html.find('.like').click();

    expect($('#results li .like').text()).toBe('unlike');
  });
});
