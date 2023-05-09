const { Given, When, Then } = require('@cucumber/cucumber');

const { login } = require('./page_objects/login_page.js');
const { clickOnPagesTab } = require('./page_objects/admin_menu.js');
const { clickOnRandomPage } = require('./page_objects/pages_list.js');
const { checkIfPageUpdated } = require('./page_objects/page_detail.js');
const { clickOnSettingsButton, uploadAnImage, clickOnCloseSettings, publishItem } = require('./page_objects/shared.js');
const { takeKrakenScreenshot } = require('./utils/takeScreenshot.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario eight', async function (email, password) {
    await login(this.driver, email, password)
    await takeKrakenScreenshot(this.driver, "Scenario8", "login")
});

When('I click on the Pages tab - Scenario eight', async function () {
    await clickOnPagesTab(this.driver)
    await takeKrakenScreenshot(this.driver, "Scenario8", "goToPageList")
});

When('I click on a random page to edit it', async function () {
    await clickOnRandomPage(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario8", "selectRandomPage")
})

When('I click on the page settings tab - Scenario eight', async function () {
    await clickOnSettingsButton(this.driver);
})

When('I upload an image with path {kraken-string} - Scenario eight', async function (image_path) {
    await uploadAnImage(this.driver, image_path);
    await takeKrakenScreenshot(this.driver, "Scenario8", "uploadNewImage")
})

When('I click on close settings - Scenario eight', async function () {
    await clickOnCloseSettings(this.driver);
})

When('I click update on the published page', async function () {
    await publishItem(this.driver);
})

Then('The page should be updated', async function () {
    await checkIfPageUpdated(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario8", "checkPageUpdated")
})