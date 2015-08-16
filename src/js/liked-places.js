function LikedPlaces(likedPlaces){
  'use strict';
  
  var placeTemplate = _.template('<li class="like"><%= place %></li>')

  function like(place){
    $('ul', likedPlaces).append(placeTemplate({place: place}));
  }

  return {
    like: like
  }
}
