Feature: Publicar una nueva página

@user1 @web
Scenario: Como usuario admin que ha iniciado sesión en ghost, quiero publicar una nueva página
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When I login with "<USER_EMAIL>" and "<USER_PASSWORD>"
  And I wait
  And I click on the Pages tab
  And I wait
  And I click on the New Page button
  And I fill out a new page contents with title "<PAGE_TITLE>"
  And I wait
  And I click publish the page without scheduling
  And I wait
  Then I navigate to page "http://localhost:2368/ghost/#/pages?type=published"
  And I should see the new page published called "<PAGE_TITLE>"
  And I wait