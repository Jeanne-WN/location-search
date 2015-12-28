When(/^I search with '(.*)'$/) do |keyword|
  fill_in 'locationInput', :with => keyword
  click_button 'search'
end

Then(/^I should see '(.*)' in search result$/) do |content|
  expect(find('#results h5')).to have_content(content)
end
