describe('SearchResults', function(){
  'use strict';

  describe('render', function(){
    var searchResults;

    beforeEach(function(){
      loadFixtures('search-results.html');
      searchResults = new SearchResults($('#searchResults'));
    });

    it('should render 1 search result', function(){
      searchResults.render([
        {name: 'Place of interesting', description: 'Description of the place.'}
      ]);

      expect($('#results')).toContainHtml(
        '<div class="panel large-12 columns">'+
          '<h5>Place of interesting</h5>'+
          '<h6>Description of the place.</h6>'+
          '<a href="#" class="like button tiny right">Like</a>'+
        '</div>')
    });

    it('should render multiple search results', function(){
      searchResults.render([
        {name: 'Beijing', description: 'Description of Beijing.'},
        {name: 'Xian', description: 'Description of xian.'}]
      );

      expect($('#results div').length).toBe(2);
      expect($('#results')).toContainText('Beijing');
      expect($('#results')).toContainText('Xian');
    });

    it('should remove previous search results', function(){
      searchResults.render([
        {name: 'Place of interesting', description: 'Description of the place.'}
      ]);
      searchResults.render([
        {name: 'Beijing', description: 'Description of Beijing.'},
        {name: 'Xian', description: 'Description of xian.'}
      ]);

      expect($('#results div').length).toBe(2);
      expect($('#results')).toContainText('Beijing');
      expect($('#results')).toContainText('Xian');
      expect($('#results')).not.toContainText('Place of interesting');
    });

    it('should add click handler to like button', function(){
      spyOnEvent(document, 'like');

      searchResults.render([
        {name: 'Place of interesting', description: 'Description of the place.'}
      ]);

      $('#results .like')[0].click();

      expect('like').toHaveBeenTriggeredOnAndWith(
        document,
        'Place of interesting'
      );
    });
  });
});
