Feature: Publish a new page with an image

@user1 @web
Scenario: Publish a new page with an image - Scenario 9
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario nine
  And I wait
  When I click on the Pages tab - Scenario nine
  And I wait
  And I click on the New Page button - Scenario nine
  And I wait
  And I fill out a new page contents with title "<PAGE_TITLE>" - Scenario nine
  And I click on the page settings tab - Scenario nine
  And I upload a new image located in "<PAGE_IMAGE_PATH>" - Scenario nine
  And I wait
  And I click on the close page settings tab - Scenario nine
  And I click publish the page without scheduling - Scenario nine
  And I wait
  Then I navigate to page "http://localhost:2368/ghost/#/pages?type=published"
  And I should see the new page published called "<PAGE_TITLE>" - Scenario nine
  And I wait
