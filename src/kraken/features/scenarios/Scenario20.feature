Feature: Cambiar la configuración general del sitio y hacer el blog privado - Escenario 20

@user1 @web
Scenario: Cambiar la configuración general del sitio y hacer el blog privado - Escenario 20
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario sixteen
    And I wait
    When I click on the Settings tab - Scenario twenty
    And I wait
    And I change the settings of the website with name "<NEW_SITE_NAME>"
    And I wait
    And I make the site private
    And I save the general site changes
    And I wait
    Then I navigate to page "http://localhost:2368/"
    And the website should be private