Feature: Eliminar un post - Escenario 18

@user1 @web
Scenario: Eliminar un post - Escenario 18
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario eighteen
  And I wait
  When I click on the Posts tab - Scenario eighteen
  And I wait
  And I click on New Post Button - Scenario eighteen
  And I wait
  And I create a post with "<POST_TITLE_LARGE>" and "<POST_CONTENT>" - Scenario eighteen
  And I wait
  And I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait
  And I select delete post with title "<POST_TITLE_LARGE>"
  And I wait
  And I delete post
  And I wait
  And I click confirm delete button
  And I wait
  Then I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait
  And I should not see the post called "<POST_TITLE_LARGE>"
  And I wait
