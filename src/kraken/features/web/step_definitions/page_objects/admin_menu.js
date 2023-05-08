const { expect } = require('chai');

const clickOnPagesTab = async function (driver) {
    let pagesButton = await driver.$("a[href$='#/pages/']")
    await pagesButton.click();
}

const clickOnCodeInjectionTab = async function (driver) {
    let codeInjectionButton = await driver.$("a[href$='#/settings/code-injection/']")
    await codeInjectionButton.click();
}

const clickOnTagsTab = async function (driver) {
    let tagsButton = await driver.$("a[href$='#/tags/']")
    await tagsButton.click();
}

const clickOnPostsTab = async function (driver) {
    let postsButton = await driver.$("a[href$='#/posts/']")
    await postsButton.click();
}

const clickOnGeneralSettingsTab = async function (driver) {
    let generalSettingsButton = await driver.$("a[href$='#/settings/general/']")
    await generalSettingsButton.click();
}

const clickOnDesignTab = async function (driver) {
    let designButton = await driver.$("a[href$='#/settings/design/']")
    await designButton.click();
}

const clickOnIntegrationTab = async function (driver) {
    let integrationButton = await driver.$("a[href$='#/settings/integrations/']")
    await integrationButton.click();
}

const clickOnProfileMenu = async function (driver) {
    let profileMenu = await driver.$("span[class$='gh-user-name mb1']")
    await profileMenu.click();

    let profileButton = await driver.$("a[href*='#/staff/']")
    await profileButton.click();
}

const clickOnLogout = async function (driver) {
    let profileMenu = await driver.$("span[class$='gh-user-name mb1']")
    await profileMenu.click();
    driver.pause(2000)
    let logoutButton = await driver.$("a[href*='#/signout/']")
    await logoutButton.click();
}

const checkAdminMenu = async function (driver) {
    expect(await driver.getUrl() === "http://localhost:2368/ghost/#/site").to.be.true;
}

module.exports = {
    clickOnPagesTab,
    clickOnCodeInjectionTab,
    clickOnTagsTab,
    clickOnPostsTab,
    clickOnGeneralSettingsTab,
    clickOnDesignTab,
    clickOnProfileMenu,
    clickOnLogout,
    checkAdminMenu,
    clickOnIntegrationTab
}