const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When ('I click on the New Page button', async function () {
    let newPageButton = await this.driver.$("a[href$='#/editor/page/']")
    await newPageButton.click();
});

When ('I click on a random page to edit it', async function(){
    let anyPage = await this.driver.$("h3[class$='gh-content-entry-title']")
    await anyPage.click();
})

Then('I should see the new page published called {kraken-string}', async function (page_title) {
    let publishedPage = await this.driver.$("h3[class$='gh-content-entry-title']")
    expect(await publishedPage.getText()).to.equal(page_title);
});