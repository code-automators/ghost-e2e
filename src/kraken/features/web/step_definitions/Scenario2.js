const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./page_objects/login_page.js');
const { clickOnPostsTab } = require('./page_objects/admin_menu.js');
const { selectRandomPost } = require('./page_objects/posts_list.js');
const { fillEditPost, checkNewPostEdited } = require('./page_objects/post_details.js');
//const { takeKrakenScreenshot } = require('./utils/takeScreenshot.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario two', async function (email, password) {
    await login(this.driver, email, password);
    //await takeKrakenScreenshot(this.driver, 'Scenario2', 'login');
});

When('I click on the Posts tab - Scenario two', async function () {
    await clickOnPostsTab(this.driver)
});

When('I select a random post', async function () {
    await selectRandomPost(this.driver);
});

When('I edit the selected post with title {kraken-string}', async function (title) {
    await fillEditPost(this.driver, title);
});

Then('I should see the new post edited called {kraken-string}', async function (page_title) {
    await checkNewPostEdited(this.driver, page_title);
});

