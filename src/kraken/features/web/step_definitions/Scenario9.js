const { Given, When, Then } = require("@cucumber/cucumber");
const { login } = require("./page_objects/login_page.js");
const { clickOnPagesTab } = require("./page_objects/admin_menu.js");
const { clickNewPageButton, checkNewPagePublished } = require("./page_objects/pages_list.js");
const { fillNewPage } = require("./page_objects/page_detail.js");
const { publishItem } = require("./page_objects/shared.js");
const { clickOnSettingsButton, clickOnCloseSettings, uploadAnImage } = require('./page_objects/shared.js');
const { takeKrakenScreenshot } = require("./utils/takeScreenshot.js");


Given(
    "I login with {kraken-string} and {kraken-string} - Scenario nine",
    async function (email, password) {
        await login(this.driver, email, password);
        await takeKrakenScreenshot(this.driver, "Scenario9", "login");
    }
);

When(
    "I click on the Pages tab - Scenario nine",
    async function () {
        await clickOnPagesTab(this.driver);
        await takeKrakenScreenshot(this.driver, "Scenario9", "goToPageList");
    }
);

When(
    "I click on the New Page button - Scenario nine",
    async function () {
        await clickNewPageButton(this.driver);
        await takeKrakenScreenshot(this.driver, "Scenario9", "goToCreatePage");
    }
);

When(
    "I fill out a new page contents with title {kraken-string} - Scenario nine",
    async function (page_title) {
        await fillNewPage(this.driver, page_title);
        await takeKrakenScreenshot(this.driver, "Scenario9", "createNewPage");
    }
);

When(
    "I click on the page settings tab - Scenario nine",
    async function () {
        await clickOnSettingsButton(this.driver);
        await takeKrakenScreenshot(this.driver, "Scenario9", "clickOnSettingsButton");
    }
);

When(
    "I upload a new image located in {kraken-string} - Scenario nine",
    async function (imagePath) {
        await uploadAnImage(this.driver, imagePath);
        await takeKrakenScreenshot(this.driver, "Scenario9", "uploadImage");
    }
);

When(
    "I click on the close page settings tab - Scenario nine",
    async function () {
        await clickOnCloseSettings(this.driver);
        await takeKrakenScreenshot(this.driver, "Scenario9", "clickOnCloseSettings");
    }
);
    
When(
    "I click publish the page without scheduling - Scenario nine",
    async function () {
        await publishItem(this.driver);
        await takeKrakenScreenshot(this.driver, "Scenario9", "publishItem");
    }
);

Then(
    "I should see the new page published called {kraken-string} - Scenario nine",
    async function (page_title) {
        await checkNewPagePublished(this.driver, page_title);
        await takeKrakenScreenshot(this.driver, "Scenario9", "checkNewPagePublished");
    }
);
