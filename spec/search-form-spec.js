describe('Search form', function(){
  'use strict';

  describe('perform search', function(){
    beforeEach(function(){
      loadFixtures('search-form.html');
      jasmine.Ajax.install();
      new SearchForm($('#searchForm'));
    });

    afterEach(function(){
      jasmine.Ajax.uninstall();
    });

    it('should search all locations', function(){
      $('#searchButton').click();
      expect(jasmine.Ajax.requests.mostRecent().url)
        .toBe('http://location-backend-service.herokuapp.com/locations');
    });

    it('should search locations with filter', function(){
      $('#locationInput').val('Mel');
      $('#searchButton').click();

      expect(jasmine.Ajax.requests.mostRecent().url)
        .toBe('http://location-backend-service.herokuapp.com/locations'+
              '?name=Mel');
    });

    it('should trigger search results event', function(){
      spyOnEvent(document, 'searched');

      $('#searchButton').click();
      jasmine.Ajax.requests.mostRecent().respondWith({
        'status': 200,
        'contentType': 'application/json',
        'responseText': '[]'
      });

      expect('searched').toHaveBeenTriggeredOnAndWith(document, []);
    });
  });

});
