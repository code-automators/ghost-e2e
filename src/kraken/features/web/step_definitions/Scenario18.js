const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./page_objects/login_page.js');
const { clickOnPostsTab } = require('./page_objects/admin_menu.js');
const { clickOnNewPost } = require('./page_objects/posts_list.js');
const { createPost, checkNewPostEdited, selectPostToDelete, deletePost, clickConfirmDelete } = require('./page_objects/post_details.js');


Given('I login with {kraken-string} and {kraken-string} - Scenario eighteen', async function (email, password) {
    await login(this.driver, email, password);
});

When('I click on the Posts tab - Scenario eighteen', async function () {
    await clickOnPostsTab(this.driver);
});

When('I click on New Post Button - Scenario eighteen', async function () {
    await clickOnNewPost(this.driver);
});

When('I create a post with {kraken-string} and {kraken-string} - Scenario eighteen', async function(title, content) {
    await createPost(this.driver, title, content);
});

When('I select delete post with title {kraken-string}', async function(title) {
    await selectPostToDelete(this.driver, title);
});

When('I delete post', async function() {
    await deletePost(this.driver);
});

When('I click confirm delete button', async function() {
    await clickConfirmDelete(this.driver);
});

Then('I should not see the post called {kraken-string}', async function(title) {
    await checkNewPostEdited(this.driver, title);
});