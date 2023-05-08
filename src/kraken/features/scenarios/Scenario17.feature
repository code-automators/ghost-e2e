Feature: Editar el perfil, cambiar credenciales e intentar acceder con antiguas y nuevas - Escenario 12

@user1 @web
Scenario: Editar el perfil, cambiar credenciales e intentar acceder con antiguas y nuevas - Escenario 12
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario twelve
    And I wait
    When I click on the profile dropdown and access my profile
    And I wait
    And I change my credentials with "<NEW_EMAIL>" and "<NEW_PASSWORD>", my old password was "<USER_PASSWORD>"
    And I wait
    Then I logout from my profile
    And I login with "<NEW_EMAIL>" and "<USER_PASSWORD>" - Scenario twelve
    And I should see incorrect password
    And I wait
    And I login with "<NEW_EMAIL>" and "<NEW_PASSWORD>" - Scenario twelve
    And I should see the admin menu