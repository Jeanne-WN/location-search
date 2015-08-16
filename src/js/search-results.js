function SearchResults(searchResults){
  'use strict';
  
  var resultTemplate = _.template('<div class="panel large-12 columns"><h5><%= name %></h5><h6><%= description %></h6><a href="#" class="like button tiny right">Like</a></div>');
  var resultsContainer = searchResults.find('#results');

  resultsContainer.on('click', '.like', function(){
    $(document).trigger('like', $('h5', this.parentElement).text());
  });

  function render(results) {
    var renderedResults = _.map(results, function(result){
      return resultTemplate(result);
    });

    resultsContainer.empty();
    resultsContainer.append(renderedResults);
  }

  return {
    render: render
  }
}
