Feature: Edit an existing tag

@user1 @web
Scenario: Edit an existing tag - Escenario 11
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario eleven
  And I wait
  When I click on the Tags tab - Scenario eleven
  And I wait