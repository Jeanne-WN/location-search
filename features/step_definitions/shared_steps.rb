Given(/^I am on location search page$/) do
  visit 'http://localhost:9999'
end

Given(/^I have '(.*)' in search result$/) do |location_name|
  fill_in 'locationInput', :with => location_name
  click_button 'search'
end
