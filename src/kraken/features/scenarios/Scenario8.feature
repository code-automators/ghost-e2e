Feature: Editar una página existente y agregar una imagen - Escenario 8

@user1 @web
Scenario: Editar una página existente y agregar una imagen - Escenario 8
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When I login with "<USER_EMAIL>" and "<USER_PASSWORD>" (Scenario 8)
  And I wait
  And I click on the Pages tab (Scenario 8)
  And I wait
  And I click on a random page to edit it
  And I wait
  And I click on the page settings tab (Scenario 8)
  And I upload an image with path "<PAGE_IMAGE_PATH>" (Scenario 8)
  And I wait
  And I click on close settings (Scenario 8)
  And I wait
  And I click update on the published page
  Then The page should be updated
