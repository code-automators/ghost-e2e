const { assert } = require("chai");

const changeWebsiteSettings = async (driver, new_name) => {
    let expandTitleButton = await driver.$("div[class$='gh-setting-first']").$("div[class$='gh-setting-action']").$("button[class$='gh-btn']")
    await expandTitleButton.click();

    let mainInfo = await driver.$("div[class$='gh-setting-first']").$$("input[class$='ember-text-field gh-input ember-view']")
    for (let input of mainInfo) {
        await driver.execute(input => {
            input.value = null
        }, input)
    }
    await mainInfo[0].setValue(new_name);
    await mainInfo[1].setValue('This is a test website, tested with Kraken :)');

    let closeTitleButton = await driver.$("div[class$='gh-setting-first']").$("div[class$='gh-setting-action']").$("button[class$='gh-btn']")
    await closeTitleButton.click();

    await driver.pause(1000);

    let languageSelect = await driver.$("div[class$='gh-setting-last']").$("div[class$='gh-setting-action']").$("button[class$='gh-btn']")
    await languageSelect.click();

    let langOption = await driver.$("div[class$='gh-setting-last']").$("input[class$='ember-text-field gh-input ember-view']")
    await langOption.click();
    await driver.execute(lang => {
        lang.value = null
    }, langOption)
    await langOption.setValue('English (United States)');
}


const makeSitePrivate = async (driver) => {
    let privateSiteSwitch = await driver.$("span[class$='input-toggle-component']")
    await privateSiteSwitch.click();
}

const checkPrivateSite = async (driver) => {
    let title = await driver.$("header").$("h1")
    assert(await title.getText() === 'This site is private', 'The site is not private')
}

const uploadBanner = async (driver, image_path) =>  {
    let imageSelector = await driver.$$("input[class$='x-file--input']");
    let lastElement = imageSelector[imageSelector - 1];
    await lastElement.setValue(image_path);
}

const checkBanner = async (driver) => {
    let classBanner = await driver.$('div.outer.site-header-background');
    assert(classBanner.includes('responsive-header-img'));
}

module.exports = {
    changeWebsiteSettings,
    makeSitePrivate,
    checkPrivateSite,
    uploadBanner,
    checkBanner,
}