const { expect } = require('chai');

const login = async function (driver, email, password) {
    let emailElement = await driver.$('#ember8');
    await emailElement.setValue(email);
    let passwordElement = await driver.$('#ember10');
    await passwordElement.setValue(password);

    let loginButton = await driver.$('#ember12')
    await loginButton.click();
}

const checkIncorrectPassword = async function (driver) {
    let incorrectPassword = await driver.$("p[class$='main-error']")
    expect(incorrectPassword).to.exist;
}

module.exports = {
    login,
    checkIncorrectPassword
}