Feature: Delete a tag - Scenario 19

@user1 @web
Scenario: Delete a tag - Scenario 19
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario nineteen
  And I wait
  And I click on the Tags tab - Scenario nineteen
  And I wait
  And I click on the New Tag button - Scenario nineteen
  And I fill out details about a new tag with image "<TAG_IMAGE_PATH>"
  And I click on the save new tag button - Scenario nineteen
  And I wait
  When I click on the Tags tab - Scenario nineteen
  And I wait
  And I click on an existing tag
  And I wait
  And I delete a tag
  And I wait
  And I confirm to delete a tag
  And I wait
  Then I navigate to page "http://localhost:2368/ghost/#/tags/to-delete/"
  And I wait
  And tag should not exist
