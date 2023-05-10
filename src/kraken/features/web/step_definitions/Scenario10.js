const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./page_objects/login_page.js');
const { clickOnIntegrationTab } = require('./page_objects/admin_menu.js');
const { checkNewIntegration, saveDescription, clickAddIntegration, addNameIntegration, clickCreateIntegration } = require('./page_objects/integration_page.js');
const { takeKrakenScreenshot } = require('./utils/takeScreenshot.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario ten', async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, 'Scenario10', 'login');
});

When('I click on the Integrations tab - Scenario ten', async function () {
    await clickOnIntegrationTab(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario10', 'clickOnIntegrationTab');
});

When('I click on add custom integrations', async function () {
    await clickAddIntegration(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario10', 'clickAddIntegration');
});

When('I add the name integration with {kraken-string}', async function (nameInt) {
    await addNameIntegration(this.driver, nameInt);
    await takeKrakenScreenshot(this.driver, 'Scenario10', 'addNameIntegration');
});

When('I click on create integration', async function () {
    await clickCreateIntegration(this.driver);
    await takeKrakenScreenshot(this.driver, 'Scenario10', 'clickCreateIntegration');
});

When('I save the description with {kraken-string}', async function (description) {
    await saveDescription(this.driver, description);
    await takeKrakenScreenshot(this.driver, 'Scenario10', 'saveDescription');
});

Then('I should see the new integration called {kraken-string}', async function (nameInt) {
    await checkNewIntegration(this.driver, nameInt);
    await takeKrakenScreenshot(this.driver, 'Scenario10', 'checkNewIntegration');
});
