const { Given, When, Then } = require('@cucumber/cucumber');

When('I login with {kraken-string} and {kraken-string}', async function (email, password) {
    let emailElement = await this.driver.$('#ember8');
    await emailElement.setValue(email);
    let passwordElement = await this.driver.$('#ember10');
    await passwordElement.setValue(password);

    let loginButton = await this.driver.$('#ember12')
    await loginButton.click();
});