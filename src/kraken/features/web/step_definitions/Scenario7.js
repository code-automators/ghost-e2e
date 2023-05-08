const { Given, When, Then } = require('@cucumber/cucumber');

const { login } = require('./page_objects/login_page.js');
const { clickOnPostsTab } = require('./page_objects/admin_menu.js');
const { clickOnSettingsButton, clickOnCloseSettings, publishItem } = require('./page_objects/shared.js');
const { clickOnNewPost } = require('./page_objects/posts_list.js');
const { assignMultipleTagsToPost, checkIfPostUpdated, fillPostName, clickOutsideSettings } = require('./page_objects/post_details.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario seven', async function (email, password) {
    await login(this.driver, email, password);
});

When('I click on the Posts tab - Scenario seven', async function () {
    await clickOnPostsTab(this.driver);
});

When('I create a new post - Scenario seven', async function () {
    await clickOnNewPost(this.driver);
});

When('I fill post with name {kraken-string}', async function (postName) {
    await fillPostName(this.driver, postName);
});

When('I click on the post settings button - Scenario seven', async function () {
    await clickOnSettingsButton(this.driver);
});

When('I assign multiple tags to the post', async function (tagname) {
    await assignMultipleTagsToPost(this.driver, tagname);
});

When('I click on close post settings - Scenario seven', async function () {
    await clickOutsideSettings(this.driver);
});

When('I click update the post - Scenario seven', async function () {
    await publishItem(this.driver);
});

Then('the post should be updated with the tag slug {kraken-string} - Scenario seven', async function (slug) {
    await checkIfPostUpdated(this.driver, slug);
});
