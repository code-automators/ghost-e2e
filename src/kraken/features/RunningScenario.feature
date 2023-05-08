Feature: Create a post with multiple tags - Scenario 7

@user1 @web
Scenario: Create a post with multiple tags - Scenario 7
  Given I navigate to page "http://localhost:2370/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario seven
  And I wait
  When I click on the Posts tab - Scenario seven
  And I wait
  And I create a new post - Scenario seven
  And I wait
  And I fill post with name "Post with multiple tags"
  And I wait
  And I click on the post settings button - Scenario seven
  And I wait
  And I assign multiple tags to the post
  And I click on close post settings - Scenario seven
  And I wait
  And I click update the post - Scenario seven
  And I wait
  Then the post should be updated with the tag slug "tag1" - Scenario seven
  And the post should be updated with the tag slug "tag2" - Scenario seven
  And the post should be updated with the tag slug "tag3" - Scenario seven
