const { Given, When, Then } = require('@cucumber/cucumber');

const { login, checkIncorrectPassword } = require('./page_objects/login_page.js');

const { clickOnProfileMenu, clickOnLogout, checkAdminMenu } = require('./page_objects/admin_menu.js');
const { changeCredentials } = require('./page_objects/profile_page.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario twelve', async function (email, password) {
    await login(this.driver, email, password)
});


When('I click on the profile dropdown and access my profile', async function () {
    await clickOnProfileMenu(this.driver);
})

When('I change my credentials with {kraken-string} and {kraken-string}, my old password was {kraken-string}', async function (newEmail, newPassword, oldPassword){
    await changeCredentials(this.driver, newEmail, oldPassword, newPassword);
})

Then('I logout from my profile', async function () {
    await clickOnLogout(this.driver);
})

Then('I should see incorrect password', async function () {
    await checkIncorrectPassword(this.driver);
})

Then('I should see the admin menu', async function () {
    await checkAdminMenu(this.driver);
})