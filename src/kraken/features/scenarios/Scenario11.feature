Feature: Edit an existing tag - Scenario 11

@user1 @web
Scenario: Edit an existing tag - Scenario 11
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario eleven
  And I wait
  And I navigate to page "http://localhost:2368/ghost/#/tags"
  And I click on the New Tag button - Scenario eleven
  And I fill out details about a new tag called "<TAG_NAME>" with image "<TAG_IMAGE_PATH>" and slug "<TAG_SLUG>" - Scenario eleven
  And I click on the save new tag button - Scenario eleven
  And I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait
  When I select the existing tag with slug "<TAG_SLUG>" to edit
  And I wait
  And I edit its slug with a random one
  And I wait
  And I click on the save new tag button - Scenario eleven
  And I wait
  Then I navigate to tag page with random slug
  And I wait
  And tag should exist
