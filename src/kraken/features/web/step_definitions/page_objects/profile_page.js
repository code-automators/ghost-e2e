const { clickSaveOrUpdateButton } = require("./shared.js");


const changeCredentials = async function (driver, newEmail, oldPassword, newPassword) {
    let newEmailField = await driver.$("input[name='email']")
    await newEmailField.click();
    await driver.execute(email => {
        email.value = null
    }, newEmailField)
    await newEmailField.setValue(newEmail);

    await clickSaveOrUpdateButton(driver);

    let newPasswordField = await driver.$("#user-password-old")
    await newPasswordField.setValue(oldPassword);

    let newPasswordField2 = await driver.$("#user-password-new")
    await newPasswordField2.setValue(newPassword);

    let newPasswordField3 = await driver.$("#user-new-password-verification")
    await newPasswordField3.setValue(newPassword);

    let changePasswordButton = await driver.$("button[class$='gh-btn gh-btn-icon button-change-password gh-btn-red ember-view']")
    await changePasswordButton.click();
}

module.exports = {
    changeCredentials
}