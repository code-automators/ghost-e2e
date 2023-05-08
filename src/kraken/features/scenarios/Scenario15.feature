Feature: Insert content on website with code injection - Scenario 15

@user1 @web
Scenario: Insert content on website with code injection - Scenario 15
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario fifteen
  And I wait
  When I click on the code injection page
  And I wait
  And I insert a paragraph on page header
  And I wait
  And I click on the save button - Scenario fifteen
  And I wait
  Then I navigate to page "http://localhost:2368"
  And I wait
  And all pages of website should contain that header
