const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When ('I fill out a new page contents with title {kraken-string}', async function (page_title) {
    let titleSection = await this.driver.$("textarea[placeholder$='Page Title']")
    await titleSection.setValue(page_title);
    let bodySection = await this.driver.$("div[data-placeholder$='Begin writing your page...']")
    await bodySection.setValue('This is a test page, tested with Kraken :)');
})

When ('I click on the page settings tab', async function () {
    let settingsButton = await this.driver.$("button[title$='Settings']")
    await settingsButton.click();
})

When ('I upload an image with path {kraken-string}', async function(image_path) {
    let imageSelector = await this.driver.$("input[class$='x-file--input']")
    await imageSelector.setValue(image_path);
})

When ('I click on close settings', async function() {
    let settingsButton = await this.driver.$("button[aria-label$='Close']")
    await settingsButton.click();
})


When ('I click publish the page without scheduling', async function() {
    let publishDropdownButton = await this.driver.$("div[role$='button'][class$='ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']")
    await publishDropdownButton.click();
    let publishButton = await this.driver.$("button[class$='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']")
    await publishButton.click();
})

When ('I click update on the published page', async function() {
    let publishDropdownButton = await this.driver.$("div[role$='button'][class$='ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']")
    await publishDropdownButton.click();
    let publishButton = await this.driver.$("button[class$='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']")
    await publishButton.click();
})

Then ('The page should be updated', async function() {
    let updatedMessage = await this.driver.$("span[class$='gh-notification-title']")
    expect(await updatedMessage.getText()).to.equal('Updated')
})

