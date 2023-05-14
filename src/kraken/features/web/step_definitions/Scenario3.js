const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./page_objects/login_page.js');
const { clickOnTagsTab } = require('./page_objects/admin_menu.js');
const { clickOnNewTag } = require('./page_objects/tags_list.js');
const { addInvalidDescription, fillTagDetails, checkErrorMessage } = require('./page_objects/create_tag.js');
const { clickSaveOrUpdateButton } = require('./page_objects/shared.js');
const { takeKrakenScreenshot } = require('./utils/takeScreenshot.js');


Given('I login with {kraken-string} and {kraken-string} - Scenario three', async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, 'Scenario3', 'login');
});

When('I click on the Tags tab - Scenario three', async function () {
    await clickOnTagsTab(this.driver)
    await takeKrakenScreenshot(this.driver, 'Scenario3', 'goToTags');
});

When('I click on the New Tag button - Scenario three', async function () {
    await clickOnNewTag(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario3', 'clickNewTagBtn');
});

When('I fill out details about a new tag called {kraken-string} with image {kraken-string} and slug {kraken-string} - Scenario three', async function (tagname, image_path, slug) {
    await fillTagDetails(this.driver, tagname, image_path, slug);
    await takeKrakenScreenshot(this.driver, 'Scenario3', 'fillTagDetails');
});

When('I add description with invalid length', async function () {
    await addInvalidDescription(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario3', 'addInvalidDescription');
});

When('I click on the save new tag button - Scenario three', async function () {
    await clickSaveOrUpdateButton(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario3', 'saveNewTag');
});

Then('an error message is displayed', async function () {
    await checkErrorMessage(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario3', 'checkErrorMsg');
});
