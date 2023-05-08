Feature: Cambiar banner de la página de inicio

@user1 @web
Scenario: Cambiar banner de la página de inicio - Escenario 14
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario fourteen
And I wait
When I click on the General tab - Scenario fourteen
And I wait
And I update the banner of the home page with path "<BANNER_PATH>"
And I wait
And I click on the save button
And I wait
Then I navigate to page "http://localhost:2368/"
And I wait
And I should display the updated banner
And I wait
