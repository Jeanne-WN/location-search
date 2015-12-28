When(/^I click 'LIKE' on '(.*)'$/) do |location_name|
  find('#results .panel .like').click
end

Then(/^I should see '(.*)' in places I liked$/) do |place_liked|
  expect(find('#likedPlaces')).to have_content(place_liked)
end
