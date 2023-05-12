const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./page_objects/login_page.js');
const { clickOnNewTag, clickOnTagBySlug } = require('./page_objects/tags_list.js');
const { fillTagDetails, setRandomTagSlug } = require('./page_objects/create_tag.js');
const { clickSaveOrUpdateButton, checkPageFound } = require('./page_objects/shared.js');
const { takeKrakenScreenshot } = require('./utils/takeScreenshot.js');


let randomTagSlug = '';

Given('I login with {kraken-string} and {kraken-string} - Scenario eleven', async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, 'Scenario11', 'login');
});

Given('I click on the New Tag button - Scenario eleven', async function () {
    await clickOnNewTag(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario11', 'clickNewTagBtn');
});

Given('I fill out details about a new tag called {kraken-string} with image {kraken-string} and slug {kraken-string} - Scenario eleven', async function (tagName, imagePath, slug) {
    await fillTagDetails(this.driver, tagName, imagePath, slug);
    await takeKrakenScreenshot(this.driver, 'Scenario11', 'fillTagDetails');
});

Given('I click on the save new tag button - Scenario eleven', async function () {
    await clickSaveOrUpdateButton(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario11', 'saveNewTag');
});

When('I select the existing tag with slug {kraken-string} to edit', async function (tagSlug) {
    await clickOnTagBySlug(this.driver, tagSlug);
    await takeKrakenScreenshot(this.driver, 'Scenario11', 'selectTagToEdit');
});

When('I edit its slug with a random one', async function () {
    randomTagSlug = await setRandomTagSlug(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario11', 'editTagSlug');
});

Then("I navigate to tag page with random slug", async function () {
    await this.driver.url(`http://localhost:2368/ghost/#/tags/${randomTagSlug}`);
    await takeKrakenScreenshot(this.driver, 'Scenario11', 'navigateToTagPage');
});

Then('tag should exist', async function () {
    await checkPageFound(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario11', 'tagIsShown');
});
