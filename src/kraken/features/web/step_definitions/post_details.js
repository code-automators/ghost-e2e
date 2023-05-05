const { Given, When, Then } = require('@cucumber/cucumber');
const { clickOnSettingsButton,  clickOnCloseSettings, publishItem } = require("./shared.js");
const expect = require('chai').expect;


When('I click on the post settings button', async function () {
    await clickOnSettingsButton(this.driver);
})

When('I assign the tag {kraken-string} to the post', async function (tagname) {
    await assignTagToPost(this.driver, tagname)
})

When ('I click on close post settings', async function() {
    await clickOnCloseSettings(this.driver);
})

When ('I click update the post', async function() {
    await publishItem(this.driver);
})

Then('the post should be updated with the tag slug {kraken-string}', async function( slug) {
    await checkIfPostUpdated(this.driver, slug)
})

async function assignTagToPost(driver, tagname) {
    let tagsField = await driver.$('#tag-input').$("input[class$='ember-power-select-trigger-multiple-input']")
    await tagsField.setValue(tagname);
    await driver.keys("Enter");
}

async function checkIfPostUpdated(driver) {
    await driver.url('http://localhost:2368/ghost/#/posts?tag=' + slug)
    let postTitle = await driver.$("a[class$='ember-view permalink gh-list-data gh-post-list-title']")
    expect(postTitle).to.exist;
}