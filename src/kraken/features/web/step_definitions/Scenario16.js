const { Given, When, Then } = require('@cucumber/cucumber');

const { login } = require('./page_objects/login_page.js');
const { clickOnTagsTab, clickOnPostsTab } = require('./page_objects/admin_menu.js');
const { clickOnNewTag } = require('./page_objects/tags_list.js');
const { fillTagDetails } = require('./page_objects/create_tag.js');
const { clickSaveOrUpdateButton, clickOnSettingsButton, clickOnCloseSettings, publishItem } = require('./page_objects/shared.js');
const { selectRandomPost } = require('./page_objects/posts_list.js');
const { assignTagToPost, checkIfPostUpdated } = require('./page_objects/post_details.js');

When('I login with {kraken-string} and {kraken-string} (Scenario 16)', async function (email, password) {
    await login(this.driver, email, password)
});

When('I click on the Tags tab (Scenario 16)', async function () {
    await clickOnTagsTab(this.driver)
})

When('I click on the New Tag button', async function () {
    await clickOnNewTag(this.driver);
})

When('I fill out details about a new tag called {kraken-string} with image {kraken-string} and slug {kraken-string}', async function (tagname, image_path, slug) {
    await fillTagDetails(this.driver, tagname, image_path, slug);
})

When('I click on the save new tag button', async function () {
    await clickSaveOrUpdateButton(this.driver);
})

When('I click on the Posts tab (Scenario 16)', async function () {
    await clickOnPostsTab(this.driver)
})

When('I select a random post (Scenario 16)', async function () {
    await selectRandomPost(this.driver);
})

When('I click on the post settings button (Scenario 16)', async function () {
    await clickOnSettingsButton(this.driver);
})

When('I assign the tag {kraken-string} to the post', async function (tagname) {
    await assignTagToPost(this.driver, tagname)
})

When ('I click on close post settings (Scenario 16)', async function() {
    await clickOnCloseSettings(this.driver);
})

When ('I click update the post (Scenario 16)', async function() {
    await publishItem(this.driver);
})

Then('the post should be updated with the tag slug {kraken-string}', async function( slug) {
    await checkIfPostUpdated(this.driver, slug)
})