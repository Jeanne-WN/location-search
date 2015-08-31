describe('LikeView', function(){
  'use strict';

  var locations, likeView;

  beforeEach(function() {
    loadFixtures('like.template');

    locations = new Backbone.Model({"locations": []});
    likeView = new LikeView(locations);
  });

  it('#render', function(){
    locations.set('locations', [{
      name: 'Amsterdam',
      liked: false
    }, {
      name: 'Beijing',
      liked: true
    }]);

    expect($('#likedPlaces li').length).toBe(1);
    expect($('#likedPlaces li').text()).toBe('Beijing');
  });
});
