Feature: Add a navigation option into the navbar

@user1 @web
Scenario: Add a new navigation option - Scenario five
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario fifth
  And I wait
  When I click on the Design tab - Scenario fifth
  And I wait
  And I add an option "<NEW_NAVBAR_OPTION_LABEL>" with "<NEW_NAVBAR_OPTION_URL>" in nav menu
  And I wait
  Then I navigate to page "http://localhost:2368"
  And I should see the new navigation option called "<NEW_NAVBAR_OPTION_LABEL>"
  And I wait
