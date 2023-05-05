const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When ('I click on the New Page button', async function () {
    clickNewPageButton(this.driver);
});

When ('I click on a random page to edit it', async function(){
    clickOnRandomPage(this.driver);
})

Then('I should see the new page published called {kraken-string}', async function (page_title) {
    checkNewPagePublished(this.driver, page_title);
});

async function clickNewPageButton(driver) {
    let newPageButton = await driver.$("a[href$='#/editor/page/']")
    await newPageButton.click();
}

async function clickOnRandomPage(driver) {
    let anyPage = await driver.$("h3[class$='gh-content-entry-title']")
    await anyPage.click();
}

async function checkNewPagePublished(driver, page_title) {
    let publishedPage = await driver.$("h3[class$='gh-content-entry-title']")
    expect(await publishedPage.getText()).to.equal(page_title);
}