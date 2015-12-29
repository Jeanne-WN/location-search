Feature: Like Locations
As consumer,
I want to like a location
so that I can remember which city I want to go

Scenario: like 1 location
  Given I am on location search page
  And I have 'MELBOURNE' in search result
  When I click 'LIKE' on 'MELBOURNE'
  Then I should see 'Melbourne' in places I liked
