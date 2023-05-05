Feature: Crear un nuevo tag y asignarselo a un post existente - Escenario 16

@user1 @web
Scenario: Crear un nuevo tag y asignarselo a un post existente - Escenario 16
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario sixteen
  And I wait
  When I click on the Tags tab - Scenario sixteen
  And I wait
  And I click on the New Tag button
  And I fill out details about a new tag called "<TAG_NAME>" with image "<TAG_IMAGE_PATH>" and slug "<TAG_SLUG>"
  And I click on the save new tag button
  And I wait
  And I click on the Posts tab - Scenario sixteen
  And I wait
  And I select a random post - Scenario sixteen
  And I wait
  And I click on the post settings button - Scenario sixteen
  And I assign the tag "<TAG_NAME>" to the post
  And I click on close post settings - Scenario sixteen
  And I click update the post - Scenario sixteen
  Then the post should be updated with the tag slug "<TAG_SLUG>"