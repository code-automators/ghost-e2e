const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

const { clickOnSettingsButton, uploadAnImage, clickOnCloseSettings, publishItem } = require("./shared.js");

When ('I fill out a new page contents with title {kraken-string}', async function (page_title) {
    await fillNewPage(this.driver, page_title);
})

When ('I click on the page settings tab', async function () {
    await clickOnSettingsButton(this.driver);
})

When ('I upload an image with path {kraken-string}', async function(image_path) {
    await uploadAnImage(this.driver, image_path);
})

When ('I click on close settings', async function() {
    await clickOnCloseSettings(this.driver);
})


When ('I click publish the page without scheduling', async function() {
    await publishItem(this.driver);
})

When ('I click update on the published page', async function() {
    await publishItem(this.driver);
})

Then ('The page should be updated', async function() {
    await checkIfPageUpdated(this.driver);
})

async function fillNewPage(driver, page_title) {
    let titleSection = await driver.$("textarea[placeholder$='Page Title']")
    await titleSection.setValue(page_title);
    let bodySection = await driver.$("div[data-placeholder$='Begin writing your page...']")
    await bodySection.setValue('This is a test page, tested with Kraken :)');
}

async function checkIfPageUpdated(driver) {
    let updatedMessage = await driver.$("span[class$='gh-notification-title']")
    expect(await updatedMessage.getText()).to.equal('Updated')
}