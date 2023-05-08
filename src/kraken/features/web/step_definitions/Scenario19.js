const { Given, When, Then } = require('@cucumber/cucumber');

const { login } = require('./page_objects/login_page.js');
const { clickOnTagsTab } = require('./page_objects/admin_menu.js');
const { clickOnNewTag, checkTagByName, clickOnTagBySlug } = require('./page_objects/tags_list.js');
const { fillTagDetails, deleteTag, confirmDeleteTag } = require('./page_objects/create_tag.js');
const { clickSaveOrUpdateButton, checkNotFound } = require('./page_objects/shared.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario nineteen', async function (email, password) {
    await login(this.driver, email, password)
});

Given('I click on the Tags tab - Scenario nineteen', async function () {
    await clickOnTagsTab(this.driver)
})

Given('I click on the New Tag button - Scenario nineteen', async function () {
    await clickOnNewTag(this.driver);
})

Given('I fill out details about a new tag with image {kraken-string}', async function (image_path) {
    await fillTagDetails(this.driver, 'Tag to be deleted', image_path, 'to-delete');
})

Given('I click on the save new tag button - Scenario nineteen', async function () {
    await clickSaveOrUpdateButton(this.driver);
})

Given('there is an existing tag to be deleted', async function () {
    await checkTagByName(this.driver, 'Tag to be deleted');
});

When('I click on an existing tag', async function () {
    await clickOnTagBySlug(this.driver, 'to-delete');
});

When('I delete a tag', async function () {
    await deleteTag(this.driver);
});

When('I confirm to delete a tag', async function () {
    await confirmDeleteTag(this.driver);
});

Then('tag should not exist', async function () {
    await checkNotFound(this.driver);
});
