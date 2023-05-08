Feature: Create a new tag with an invalid description

@user1 @web
Scenario: Create a new tag with an invalid description - Escenario 3
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario three
And I wait
When I click on the Tags tab - Scenario ten
