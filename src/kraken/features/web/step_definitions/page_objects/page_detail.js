const expect = require('chai').expect;

const fillNewPage = async function (driver, page_title) {
    let titleSection = await driver.$("textarea[placeholder$='Page Title']")
    await titleSection.setValue(page_title);
    let bodySection = await driver.$("div[data-placeholder$='Begin writing your page...']")
    await bodySection.setValue('This is a test page, tested with Kraken :)');
}

const checkIfPageUpdated = async function (driver) {
    let updatedMessage = await driver.$("span[class$='gh-notification-title']")
    expect(await updatedMessage.getText() == "Updated").to.be.true;
}

module.exports = {
    fillNewPage,
    checkIfPageUpdated
}