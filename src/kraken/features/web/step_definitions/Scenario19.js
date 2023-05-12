const { Given, When, Then } = require('@cucumber/cucumber');

const { login } = require('./page_objects/login_page.js');
const { clickOnTagsTab } = require('./page_objects/admin_menu.js');
const { clickOnNewTag, checkTagByName, clickOnTagBySlug } = require('./page_objects/tags_list.js');
const { fillTagDetails, deleteTag, confirmDeleteTag } = require('./page_objects/create_tag.js');
const { clickSaveOrUpdateButton, checkNotFound } = require('./page_objects/shared.js');
const { takeKrakenScreenshot } = require('./utils/takeScreenshot.js');


Given('I login with {kraken-string} and {kraken-string} - Scenario nineteen', async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, 'Scenario19', 'login');
});

Given('I click on the Tags tab - Scenario nineteen', async function () {
    await clickOnTagsTab(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario19', 'goToTags');
})

Given('I click on the New Tag button - Scenario nineteen', async function () {
    await clickOnNewTag(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario19', 'clickNewTagBtn');
})

Given('I fill out details about a new tag with image {kraken-string}', async function (image_path) {
    await fillTagDetails(this.driver, 'Tag to be deleted', image_path, 'to-delete');
    await takeKrakenScreenshot(this.driver, 'Scenario19', 'fillTagDetails');
})

Given('I click on the save new tag button - Scenario nineteen', async function () {
    await clickSaveOrUpdateButton(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario19', 'saveNewTag');
})

Given('there is an existing tag to be deleted', async function () {
    await checkTagByName(this.driver, 'Tag to be deleted');
    await takeKrakenScreenshot(this.driver, 'Scenario19', 'checkTagToDeleteExists');
});

When('I click on an existing tag', async function () {
    await clickOnTagBySlug(this.driver, 'to-delete');
    await takeKrakenScreenshot(this.driver, 'Scenario19', 'clickTag');
});

When('I delete a tag', async function () {
    await deleteTag(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario19', 'deleteTag');
});

When('I confirm to delete a tag', async function () {
    await confirmDeleteTag(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario19', 'confirmTagDeletion');
});

Then('tag should not exist', async function () {
    await checkNotFound(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario19', 'checkTagNotExisting');
});
