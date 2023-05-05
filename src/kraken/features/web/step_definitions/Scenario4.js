const { Given, When, Then } = require('@cucumber/cucumber');

const { login } = require('./page_objects/login_page.js');
const { clickOnPagesTab } = require('./page_objects/admin_menu.js');
const { clickNewPageButton, checkNewPagePublished } = require('./page_objects/pages_list.js');
const { fillNewPage } = require('./page_objects/page_detail.js');
const { publishItem } = require('./page_objects/shared.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario four', async function (email, password) {
    await login(this.driver, email, password)
});

When('I click on the Pages tab - Scenario four', async function () {
    await clickOnPagesTab(this.driver)
});

When('I click on the New Page button', async function () {
    await clickNewPageButton(this.driver);
});

When('I fill out a new page contents with title {kraken-string}', async function (page_title) {
    await fillNewPage(this.driver, page_title);
})

When('I click publish the page without scheduling', async function () {
    await publishItem(this.driver);
})

Then('I should see the new page published called {kraken-string}', async function (page_title) {
    await checkNewPagePublished(this.driver, page_title);
});