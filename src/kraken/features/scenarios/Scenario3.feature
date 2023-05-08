Feature: Create a new tag with an invalid description - Scenario 3

@user1 @web
Scenario: Create a new tag with an invalid description - Scenario 3
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario three
  And I wait
  When I click on the Tags tab - Scenario three
  And I wait
  And I click on the New Tag button - Scenario three
  And I wait
  And I fill out details about a new tag called "<TAG_NAME>" with image "<TAG_IMAGE_PATH>" and slug "<TAG_SLUG>" - Scenario three
  And I wait
  And I add description with invalid length
  And I wait
  And I click on the save new tag button - Scenario three
  And I wait
  Then an error message is displayed
