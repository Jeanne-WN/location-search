'use strict';

var $ = require('jquery');

var LocationModel = require('./models/location-model');
var SearchFormView = require('./views/search-form-view');
var SearchResultView = require('./views/search-result-view');
var LikeView = require('./views/like-view');

$(function(){
  var locations = new LocationModel();

  var searchForm = new SearchFormView(locations);
  var searchResult = new SearchResultView(locations);
  var liked = new LikeView(locations);

  searchForm.render();
});
