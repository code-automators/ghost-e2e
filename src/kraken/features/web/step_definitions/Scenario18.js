const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./page_objects/login_page.js');
const { clickOnPostsTab } = require('./page_objects/admin_menu.js');
const { clickOnNewPost } = require('./page_objects/posts_list.js');
const { createPost, checkNewPostEdited, selectPostToDelete, deletePost, clickConfirmDelete } = require('./page_objects/post_details.js');
const { takeKrakenScreenshot } = require('./utils/takeScreenshot.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario eighteen', async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, 'Scenario18', 'login');
});

When('I click on the Posts tab - Scenario eighteen', async function () {
    await clickOnPostsTab(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario18', 'clickOnPostsTab');
});

When('I click on New Post Button - Scenario eighteen', async function () {
    await clickOnNewPost(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario18', 'clickOnNewPost');
});

When('I create a post with {kraken-string} and {kraken-string} - Scenario eighteen', async function(title, content) {
    await createPost(this.driver, title, content);
    await takeKrakenScreenshot(this.driver, 'Scenario18', 'createPost');
});

When('I select delete post with title {kraken-string}', async function(title) {
    await selectPostToDelete(this.driver, title);
    await takeKrakenScreenshot(this.driver, 'Scenario18', 'selectPostToDelete');
});

When('I delete post', async function() {
    await deletePost(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario18', 'deletePost');
});

When('I click confirm delete button', async function() {
    await clickConfirmDelete(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario18', 'clickConfirmDelete');
});

Then('I should not see the post called {kraken-string}', async function(title) {
    await checkNewPostEdited(this.driver, title);
    await takeKrakenScreenshot(this.driver, 'Scenario18', 'checkNewPostEdited');
});