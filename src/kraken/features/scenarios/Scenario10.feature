Feature: Crear una integración personalizada

@user1 @web
Scenario: Crear una integración personalizada - Escenario 10
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario ten
And I wait
When I click on the Integrations tab - Scenario ten
And I wait
And I add a custom integration with "<NAME_INTEGRATION>" 
And I wait
And I save the description with "<DESCRIPTION_INTEGRATION>"
And I wait
Then I navigate to page "http://localhost:2368/ghost/#/settings/integrations"
And I wait
And I should see the new integration called "<NAME_INTEGRATION>"
And I wait
