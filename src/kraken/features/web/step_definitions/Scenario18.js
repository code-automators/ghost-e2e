const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./page_objects/login_page.js');
const { clickOnPostsTab } = require('./page_objects/admin_menu.js');
const { clickOnNewPost } = require('./page_objects/posts_list.js');
const { createPost, deletePost, checkNewPostEdited } = require('./page_objects/post_details.js');


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
    await createPost(this.driver, content);
});

When('I delete a post with title {kraken-string}', async function(title) {
    await deletePost(this.driver, title);
});

Then('I should not see the post called {kraken-string}', async function(title) {
    await checkNewPostEdited(this.driver, title);
});