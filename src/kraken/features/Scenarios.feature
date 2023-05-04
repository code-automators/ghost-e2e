Feature: Ghost Testing

@user1 @web
Scenario: Publicar una nueva página - Escenario 4
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

@user2 @web
Scenario: Editar una página existente y agregar una imagen - Escenario 8
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When I login with "<USER_EMAIL>" and "<USER_PASSWORD>"
  And I wait
  And I click on the Pages tab
  And I wait
  And I click on a random page to edit it
  And I wait
  And I click on the page settings tab
  And I upload an image with path "<PAGE_IMAGE_PATH>"
  And I wait
  And I click on close settings
  And I wait
  And I click update on the published page
  Then The page should be updated