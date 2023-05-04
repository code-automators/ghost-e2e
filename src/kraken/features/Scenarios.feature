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

@user3 @web
Scenario: Insertar código personalizado en el header de la página principal - Escenario 12
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When I login with "<USER_EMAIL>" and "<USER_PASSWORD>"
  And I wait
  And I click on the Code Injection tab
  And I wait
  And I fill out the code injection section with Header: <HEADER_CODE_INJECTION> and Footer: <HEADER_CODE_INJECTION>
  And I wait
  And I click on the code injection save button
  And I wait

@user4 @web
Scenario: Crear un nuevo tag y asignarselo a un post existente - Escenario 16
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  When I login with "<USER_EMAIL>" and "<USER_PASSWORD>"
  And I wait
  And I click on the Tags tab
  And I wait
  And I click on the New Tag button
  And I fill out details about a new tag called "<TAG_NAME>" with image "<TAG_IMAGE_PATH>" and slug "<TAG_SLUG>"
  And I click on the save new tag button
  And I wait
  And I click on the Posts tab
  And I wait
  And I select a random post
  And I wait
  And I click on the post settings button
  And I assign the tag "<TAG_NAME>" to the post
  And I click on close post settings
  And I click update the post
  Then the post should be updated with the tag slug "<TAG_SLUG>"