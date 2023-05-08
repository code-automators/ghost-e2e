const expect = require('chai').expect;


const clickSaveOrUpdateButton = async (driver) => {
    let saveButton = await driver.$("button[class$='gh-btn gh-btn-blue gh-btn-icon ember-view']")
    await saveButton.click();
}

const clickOnSettingsButton = async (driver) => {
    let settingsButton = await driver.$("button[title$='Settings']")
    await settingsButton.click();
}

const clickOnCloseSettings = async (driver) => {
    let settingsButton = await driver.$("button[aria-label$='Close']")
    await settingsButton.click();
}

const uploadAnImage = async (driver, image_path) => {
    let imageSelector = await driver.$("input[class$='x-file--input']")
    await imageSelector.setValue(image_path);
}

const publishItem = async (driver) => {
    let publishDropdownButton = await driver.$("div[role$='button'][class$='ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']")
    await publishDropdownButton.click();
    let publishButton = await driver.$("button[class$='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']")
    await publishButton.click();
}

const checkNotFound = async function (driver) {
    let notFoundMessage = await driver.$(".error-code-size");
    expect(await notFoundMessage.getText()).to.equal('404');
}


module.exports = {
    clickSaveOrUpdateButton,
    clickOnSettingsButton,
    clickOnCloseSettings,
    uploadAnImage,
    publishItem,
    checkNotFound,
}
