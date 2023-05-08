const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./page_objects/login_page.js');
const { clickSaveOrUpdateButton } = require('./page_objects/shared.js');
const { clickOnCodeInjectionTab } = require('./page_objects/admin_menu.js');
const { insertRandomParagraphOnHeader } = require('./page_objects/code_injection_page.js');
const { checkParagraphOnSite } = require('./page_objects/home_page.js');

let randomParagraph = '';

Given('I login with {kraken-string} and {kraken-string} - Scenario fifteen', async function (email, password) {
    await login(this.driver, email, password);
});

When('I click on the code injection page', async function () {
    await clickOnCodeInjectionTab(this.driver);
});

When('I insert a paragraph on page header', async function () {
    randomParagraph = await insertRandomParagraphOnHeader(this.driver);
});

When('I click on the save button - Scenario fifteen', async function () {
    await clickSaveOrUpdateButton(this.driver);
});

Then('all pages of website should contain that header', async function () {
    await checkParagraphOnSite(this.driver, randomParagraph);
});
