const { Given, When, Then } = require('@cucumber/cucumber');
const { takeKrakenScreenshot } = require('./utils/takeScreenshot.js');
const { login } = require('./page_objects/login_page.js');
const { clickOnTagsTab, clickOnPostsTab } = require('./page_objects/admin_menu.js');
const { clickOnNewTag } = require('./page_objects/tags_list.js');
const { fillTagDetails } = require('./page_objects/create_tag.js');
const { clickSaveOrUpdateButton, clickOnSettingsButton, typeEscape, publishItem } = require('./page_objects/shared.js');
const { selectRandomPost } = require('./page_objects/posts_list.js');
const { assignTagToPost, checkIfPostsExists } = require('./page_objects/post_details.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario sixteen', async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "Scenario16", "login")
});

When('I click on the Tags tab - Scenario sixteen', async function () {
    await clickOnTagsTab(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario16", "goToTagsList")
});

When('I click on the New Tag button', async function () {
    await clickOnNewTag(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario16", "goToCreateTag")
});

When('I fill out details about a new tag called {kraken-string} with image {kraken-string} and slug {kraken-string}', async function (tagname, image_path, slug) {
    await fillTagDetails(this.driver, tagname, image_path, slug);
    await takeKrakenScreenshot(this.driver, "Scenario16", "fillTagDetails")
});

When('I click on the save new tag button', async function () {
    await clickSaveOrUpdateButton(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario16", "createNewTag")
});

When('I click on the Posts tab - Scenario sixteen', async function () {
    await clickOnPostsTab(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario16", "goToPostsList")
});

When('I select a random post - Scenario sixteen', async function () {
    await selectRandomPost(this.driver);
});

When('I click on the post settings button - Scenario sixteen', async function () {
    await clickOnSettingsButton(this.driver);
});

When('I assign the tag {kraken-string} to the post', async function (tagname) {
    await assignTagToPost(this.driver, tagname);
});

When('I click on close post settings - Scenario sixteen', async function () {
    await typeEscape(this.driver);
});

When('I click update the post - Scenario sixteen', async function () {
    await publishItem(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario16", "addTagToPost")
});

Then("I navigate to posts page with slug {kraken-string}", async function (slug) {
    await this.driver.url(`http://localhost:2368/ghost/#/posts?tag=${slug}`);
});

Then('the post should be updated with the tag slug {kraken-string}', async function (slug) {
    await checkIfPostsExists(this.driver, slug)
    await takeKrakenScreenshot(this.driver, "Scenario16", "checkPostWithNewTag")
});
