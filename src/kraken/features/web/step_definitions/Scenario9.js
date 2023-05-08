const { Given, When, Then } = require("@cucumber/cucumber");
const { login } = require("./page_objects/login_page.js");
const { clickOnPagesTab } = require("./page_objects/admin_menu.js");
const { clickNewPageButton, checkNewPagePublished } = require("./page_objects/pages_list.js");
const { fillNewPage } = require("./page_objects/page_detail.js");
const { publishItem } = require("./page_objects/shared.js");
const { clickOnSettingsButton, clickOnCloseSettings, uploadAnImage } = require('./page_objects/shared.js');


Given(
    "I login with {kraken-string} and {kraken-string} - Scenario nine",
    async function (email, password) {
        await login(this.driver, email, password)
    }
);

When(
    "I click on the Pages tab - Scenario nine",
    async function () {
        await clickOnPagesTab(this.driver)
    }
);

When("I click on the New Page button - Scenario nine",
    async function () {
        await clickNewPageButton(this.driver);
    }
);

When(
    "I fill out a new page contents with title {kraken-string} - Scenario nine",
    async function (page_title) {
        await fillNewPage(this.driver, page_title);
    }
);

When(
    "I click on the page settings tab - Scenario nine",
    async function () {
        await clickOnSettingsButton(this.driver);
    }
);

When(
    "I upload a new image located in {kraken-string} - Scenario nine",
    async function (imagePath) {
        await uploadAnImage(this.driver, imagePath);
    }
);

When('I click on the close page settings tab - Scenario nine',
    async function () {
        await clickOnCloseSettings(this.driver);
    }
);
    
When(
    "I click publish the page without scheduling - Scenario nine",
    async function () {
        await publishItem(this.driver);
    }
);

Then(
    "I should see the new page published called {kraken-string} - Scenario nine",
    async function (page_title) {
        await checkNewPagePublished(this.driver, page_title);
    }
);
