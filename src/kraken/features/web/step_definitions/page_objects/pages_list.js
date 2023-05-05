const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;





const clickNewPageButton = async function (driver) {
    let newPageButton = await driver.$("a[href$='#/editor/page/']")
    await newPageButton.click();
}

const clickOnRandomPage = async function (driver) {
    let anyPage = await driver.$("h3[class$='gh-content-entry-title']")
    await anyPage.click();
}

const checkNewPagePublished = async function (driver, page_title) {
    let publishedPage = await driver.$("h3[class$='gh-content-entry-title']")
    expect(await publishedPage.getText()).to.equal(page_title);
}

module.exports = {
    clickNewPageButton,
    clickOnRandomPage,
    checkNewPagePublished
}