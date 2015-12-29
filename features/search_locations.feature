Feature: Search Locations
As consumer,
I want to search location with keyword
so that I can get a better idea about the city

Scenario: search location with keyword
  Given I am on location search page
  When I search with 'Mel'
  Then I should see 'MELBOURNE' in search result
