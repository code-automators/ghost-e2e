const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I login with {kraken-string} and {kraken-string}', async function (email, password) {
    let emailElement = await this.driver.$('#ember8');
    await emailElement.setValue(email);
    let passwordElement = await this.driver.$('#ember10');
    await passwordElement.setValue(password);

    let loginButton = await this.driver.$('#ember12')
    await loginButton.click();
});

When ('I click on the Pages tab', async function () {
    let pagesButton = await this.driver.$("a[href$='#/pages/']")
    await pagesButton.click();
});

When ('I click on the New Page button', async function () {
    let newPageButton = await this.driver.$("a[href$='#/editor/page/']")
    await newPageButton.click();
});

When ('I fill out a new page contents with title {kraken-string}', async function (page_title) {
    let titleSection = await this.driver.$("textarea[placeholder$='Page Title']")
    await titleSection.setValue(page_title);
    let bodySection = await this.driver.$("div[data-placeholder$='Begin writing your page...']")
    await bodySection.setValue('This is a test page, tested with Kraken :)');
})

When ('I click publish the page without scheduling', async function() {
    let publishDropdownButton = await this.driver.$("div[role$='button'][class$='ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']")
    await publishDropdownButton.click();
    let publishButton = await this.driver.$("button[class$='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']")
    await publishButton.click();
})

Then('I should see the new page published called {kraken-string}', async function (page_title) {
    let publishedPage = await this.driver.$("h3[class$='gh-content-entry-title']")
    expect(await publishedPage.getText()).to.equal(page_title);
});