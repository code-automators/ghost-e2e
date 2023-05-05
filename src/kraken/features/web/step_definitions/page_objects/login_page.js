
const login = async function (driver, email, password) {
    let emailElement = await driver.$('#ember8');
    await emailElement.setValue(email);
    let passwordElement = await driver.$('#ember10');
    await passwordElement.setValue(password);

    let loginButton = await driver.$('#ember12')
    await loginButton.click();
}

module.exports = {
    login
}