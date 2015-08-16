$(function(){
  'use strict';
  
  var searchForm = new SearchForm($('#searchForm')),
      searchResults = new SearchResults($('#searchResults')),
      likedPlaces = new LikedPlaces($('#likedPlaces'));

  $(document).on('searched', function(event){
    var results = [].slice.apply(arguments).splice(1, arguments.length - 1);
    searchResults.render(results);
  });

  $(document).on('like', function(event, place){
    likedPlaces.like(place);
  });
});
