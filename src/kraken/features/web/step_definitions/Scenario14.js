const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./page_objects/login_page.js');
const { clickSaveOrUpdateButton } = require('./page_objects/shared.js');
const { checkBanner, uploadBanner } = require('./page_objects/settings_page.js');
const { clickOnGeneralSettingsTab } = require('./page_objects/admin_menu.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario fourteen', async function (email, password) {
    await login(this.driver, email, password);
});

When('I click on the General tab - Scenario fourteen', async function () {
    await clickOnGeneralSettingsTab(this.driver);
});

When('I update the banner of the home page with path {kraken-string}', async function (image_path) {
    await uploadBanner(this.driver, image_path);
});

When('I click on the save button', async function () {
    await clickSaveOrUpdateButton(this.driver);
});

Then('I should display the updated banner', async function () {
    await checkBanner(this.driver);
});