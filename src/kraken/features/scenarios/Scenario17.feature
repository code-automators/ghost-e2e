Feature: Add information to user profile - Scenario 17

@user1 @web
Scenario: Add information to user profile - Scenario 17
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario seventeen
    And I wait
    When I click on the profile dropdown and access my profile - Scenario seventeen
    And I wait
    And I change my profile info with "<USER_SLUG>", "<USER_WEBSITE>", "<USER_FACEBOOK>" and "<USER_TWITTER>" 
    And I wait
    Then I navigate to authors page with slug "<USER_SLUG>"
    And I wait
    And I should see the author options
    And I wait
