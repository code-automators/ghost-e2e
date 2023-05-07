const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./page_objects/login_page.js');
const { clickOnIntegrationTab } = require('./page_objects/admin_menu.js');
const { addIntegration, checkNewIntegration, saveDescription } = require('./page_objects/integration_page.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario ten', async function (email, password) {
    await login(this.driver, email, password);
});

When('I click on the Integrations tab - Scenario ten', async function () {
    await clickOnIntegrationTab(this.driver);
});

When('I add a custom integration with {kraken-string}', async function (nameInt) {
    await addIntegration(this.driver, nameInt);
});

When('I save the description with {kraken-string}', async function (description) {
    await saveDescription(this.driver, description);
});

Then('I should see the new integration called {kraken-string}', async function (nameInt) {
    await checkNewIntegration(this.driver, nameInt);
});
