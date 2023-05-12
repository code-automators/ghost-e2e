const { Given, When, Then } = require('@cucumber/cucumber');

const { login } = require('./page_objects/login_page.js');
const { clickOnPostsTab } = require('./page_objects/admin_menu.js');
const { clickOnSettingsButton, typeEscape, publishItem } = require('./page_objects/shared.js');
const { clickOnNewPost } = require('./page_objects/posts_list.js');
const { assignMultipleTagsToPost, checkIfPostsExists, fillPostName } = require('./page_objects/post_details.js');
const { takeKrakenScreenshot } = require('./utils/takeScreenshot.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario seven', async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, 'Scenario7', 'login');
});

When('I click on the Posts tab - Scenario seven', async function () {
    await clickOnPostsTab(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario7', 'goToPosts');
});

When('I create a new post - Scenario seven', async function () {
    await clickOnNewPost(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario7', 'createPost');
});

When('I fill post with name {kraken-string}', async function (postName) {
    await fillPostName(this.driver, postName);
    await takeKrakenScreenshot(this.driver, 'Scenario7', 'fillPost');
});

When('I click on the post settings button - Scenario seven', async function () {
    await clickOnSettingsButton(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario7', 'clickPostSettings');
});

When('I assign multiple tags to the post', async function () {
    await assignMultipleTagsToPost(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario7', 'addMultipleTagsToPost');
});

When('I click on close post settings - Scenario seven', async function () {
    await typeEscape(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario7', 'closePostSettings');
});

When('I click update the post - Scenario seven', async function () {
    await publishItem(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario7', 'clickPostUpdateBtn');
});

Then('the post should be updated with the tag slug {kraken-string} - Scenario seven', async function (slug) {
    await checkIfPostsExists(this.driver, slug);
    await takeKrakenScreenshot(this.driver, 'Scenario7', 'checkPostTagSlug');
});
