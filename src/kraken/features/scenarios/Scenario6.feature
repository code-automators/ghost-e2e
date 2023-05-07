Feature: Crear un post y agregar una imagen

@user1 @web
Scenario: Crear un post y agregar una imagen - Escenario 6
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I login with "<USER_EMAIL>" and "<USER_PASSWORD>" - Scenario six
And I wait
When I click on the Posts tab - Scenario six
And I wait
And I click on New Post Button
And I wait
And I create a post with "<POST_TITLE>" and "<POST_CONTENT>"
And I wait
And I add an image with path "<PAGE_IMAGE_PATH>"
And I wait
And I click on close settings
And I wait
And I wait
And I wait
And I click update on the published post
And I wait
Then the post should be updated with the image
And I wait