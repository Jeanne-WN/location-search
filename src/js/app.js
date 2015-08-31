'use strict';

$(function(){
  var locations = new LocationModel();

  var searchForm = new SearchFormView(locations);
  var searchResult = new SearchResultView(locations);
  var liked = new LikeView(locations);

  searchForm.render();
});
