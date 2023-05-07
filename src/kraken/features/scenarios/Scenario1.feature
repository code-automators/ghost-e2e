Feature: Create and publish a new post with a tag

@user1 @web
Scenario: Create and publish a new post with a tag - Scenario 1
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario one
  And I wait
  When I click on the Posts tab - Scenario one
  And I wait
  And I click on 'New Post' Button
  And I wait
  And I create a new post with "<POST_TITLE>", "<POST_CONTENT>" and tag "<TAG_NAME>"
  And I wait
  Then I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait
  And I should see the new post edited called "<POST_TITLE>"
  And I wait
