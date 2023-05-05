const expect = require('chai').expect;


const clickNewPageButton = async function (driver) {
    let newPageButton = await driver.$("a[href$='#/editor/page/']")
    await newPageButton.click();
}

const clickOnRandomPage = async function (driver) {
    let anyPage = await driver.$$("h3[class$='gh-content-entry-title']")
    await anyPage[Math.floor(Math.random() * anyPage.length)].click();
}

const checkNewPagePublished = async function (driver, page_title) {
    let publishedPage = await driver.$$("h3[class$='gh-content-entry-title']")
    let found = false;
    for (let page of publishedPage) {
        if (await page.getText() === page_title) {
            found = true;
            break;
        }
    }
    expect(found).to.be.true;
}

module.exports = {
    clickNewPageButton,
    clickOnRandomPage,
    checkNewPagePublished
}