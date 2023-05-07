Feature: Create and publish a new scheduled post

@user1 @web
Scenario: Create and publish a new scheduled post - Scenario thirteen
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario thirteen
  And I wait
  When I click on the Posts tab - Scenario thirteen
  And I wait
  And I click on 'New Post' Button - Scenario thirteen
  And I wait
  And I create a new post with "<POST_TITLE>", "<POST_CONTENT>" and schedule for day "<POST_DATE>" and hour "<POST_HOUR>"
  And I wait
  Then I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait
  And I should see the new post edited called "<POST_TITLE>"
  And I wait
