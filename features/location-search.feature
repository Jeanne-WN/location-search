Feature: Location Search

Scenario: search location with key word
  Given I am on location search page
  When I search with 'Mel'
  Then I should see 'MELBOURNE' in search result
