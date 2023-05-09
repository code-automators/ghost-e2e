const { Given, When, Then } = require('@cucumber/cucumber');
const { takeKrakenScreenshot } = require('./utils/takeScreenshot.js');
const { login } = require('./page_objects/login_page.js');
const { clickOnGeneralSettingsTab } = require('./page_objects/admin_menu.js');
const { clickSaveOrUpdateButton } = require('./page_objects/shared.js');
const { changeWebsiteSettings, makeSitePrivate, checkPrivateSite } = require('./page_objects/settings_page.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario twenty', async function (email, password) {
    await login(this.driver, email, password)
    await takeKrakenScreenshot(this.driver, "Scenario20", "login")
});

When('I click on the Settings tab - Scenario twenty', async function () {
    await clickOnGeneralSettingsTab(this.driver)
    await takeKrakenScreenshot(this.driver, "Scenario20", "goToSettings")
});

When('I change the settings of the website with name {kraken-string}', async function (new_name) {
    await changeWebsiteSettings(this.driver, new_name);
});

When('I make the site private', async function () {
    await makeSitePrivate(this.driver);
})

When('I save the general site changes', async function () {
    await clickSaveOrUpdateButton(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario20", "changeSettingsAndMakePrivate")
})

Then('the website should be private', async function () {
    await checkPrivateSite(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario20", "checkIfSiteIsPrivate")
});