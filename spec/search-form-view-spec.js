var Backbone = require('backbone');
var $ = require('jquery');
var SearchFormView = require('../src/js/views/search-form-view');

describe('SearchFormView', function(){
  'use strict';

  var locations, searchFormView;

  beforeEach(function() {
    loadFixtures('search-form.template');
    jasmine.Ajax.install();

    locations = new Backbone.Model({"locations": []});
    searchFormView = new SearchFormView(locations);
  });

  afterEach(function(){
    jasmine.Ajax.uninstall();
  });

  it('#render', function(){
    var html = searchFormView.render();

    expect(html.find('#locationInput')).toExist();
    expect(html.find('#searchButton')).toExist();
  });

  it('#search', function(){
    var html = searchFormView.render();

    html.find('#locationInput').val('Melbourne');
    html.find('#searchButton').click();

    jasmine.Ajax.requests.mostRecent().respondWith({
      'status': 200,
      'contentType': 'application/json',
      'responseText': '[{"name": "Melbourne"}]'
    });

    expect(jasmine.Ajax.requests.mostRecent().url)
        .toBe('http://location-backend-service.herokuapp.com/locations?name=Melbourne');
    expect(locations.get('locations')[0].name).toBe('Melbourne');
    expect(locations.get('locations')[0].liked).toBe(false);
  });
});
