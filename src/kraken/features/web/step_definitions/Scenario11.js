const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./page_objects/login_page.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario eleven', async function (email, password) {
    await login(this.driver, email, password)
});

When('I click on the Tags tab - Scenario eleven', async function () {
    await clickOnTagsTab(this.driver)
})