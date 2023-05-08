const { Given, When, Then } = require('@cucumber/cucumber');

const { login } = require('./page_objects/login_page.js');
const { clickOnPagesTab } = require('./page_objects/admin_menu.js');
const { clickNewPageButton, checkNewPagePublished } = require('./page_objects/pages_list.js');
const { fillNewPage } = require('./page_objects/page_detail.js');
const { publishItem } = require('./page_objects/shared.js');
const { takeKrakenScreenshot } = require('./utils/takeScreenshot.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario four', async function (email, password) {
    await login(this.driver, email, password)
    //await takeKrakenScreenshot(this.driver, 'Scenario4', 'login')
});

When('I click on the Pages tab - Scenario four', async function () {
    await clickOnPagesTab(this.driver)
    //await takeKrakenScreenshot(this.driver, 'Scenario4', 'clickOnPagesTab')
});

When('I click on the New Page button', async function () {
    await clickNewPageButton(this.driver);
    //await takeKrakenScreenshot(this.driver, 'Scenario4', 'clickNewPageButton')
});

When('I fill out a new page contents with title {kraken-string}', async function (page_title) {
    await fillNewPage(this.driver, page_title);
    //await takeKrakenScreenshot(this.driver, 'Scenario4', 'fillNewPage')
})

When('I click publish the page without scheduling', async function () {
    await publishItem(this.driver);
    //await takeKrakenScreenshot(this.driver, 'Scenario4', 'publishItem')
})

Then('I should see the new page published called {kraken-string}', async function (page_title) {
    await checkNewPagePublished(this.driver, page_title);
    //await takeKrakenScreenshot(this.driver, 'Scenario4', 'checkNewPagePublished')
});