Feature: Editar un post existente actualizando su título

@user1 @web
Scenario: Editar un post existente actualizando su título - Escenario 2
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario two
  And I wait
  When I click on the Posts tab - Scenario two
  And I wait
  And I select a random post
  And I wait
  And I edit the selected post with title "<POST_TITLE>"
  And I wait
  Then I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait
  And I should see the new post edited called "<POST_TITLE>"
  And I wait