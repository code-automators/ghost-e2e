const { Given, When, Then } = require('@cucumber/cucumber');

When('I login with {kraken-string} and {kraken-string}', async function (email, password) {
    await login(this.driver, email, password)
});

async function login(driver, email, password) {
    let emailElement = await driver.$('#ember8');
    await emailElement.setValue(email);
    let passwordElement = await driver.$('#ember10');
    await passwordElement.setValue(password);

    let loginButton = await driver.$('#ember12')
    await loginButton.click();
}