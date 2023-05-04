const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;


When('I click on the post settings button', async function () {
    let settingsButton = await this.driver.$("button[title$='Settings']")
    await settingsButton.click();
})

When('I assign the tag {kraken-string} to the post', async function (tagname) {
    let tagsField = await this.driver.$('#tag-input').$("input[class$='ember-power-select-trigger-multiple-input']")
    await tagsField.setValue(tagname);
    await this.driver.keys("Enter");
})

When ('I click on close post settings', async function() {
    let settingsButton = await this.driver.$("button[aria-label$='Close']")
    await settingsButton.click();
})

When ('I click update the post', async function() {
    let publishDropdownButton = await this.driver.$("div[role$='button'][class$='ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']")
    await publishDropdownButton.click();
    let publishButton = await this.driver.$("button[class$='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']")
    await publishButton.click();
})

Then('the post should be updated with the tag slug {kraken-string}', async function( slug) {
    await this.driver.url('http://localhost:2368/ghost/#/posts?tag=' + slug)
    let postTitle = await this.driver.$("a[class$='ember-view permalink gh-list-data gh-post-list-title']")
    expect(postTitle).to.exist;
})
