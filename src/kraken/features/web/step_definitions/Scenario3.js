const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./page_objects/login_page.js');
const { clickOnTagsTab } = require('./page_objects/admin_menu.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario three', async function (email, password) {
    await login(this.driver, email, password);
});

When('I click on the Tags tab - Scenario ten', async function () {
    await clickOnTagsTab(this.driver);
});