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


const changeAuthorInfo = async function (driver, slug, website, facebook, twitter) {
    let slugField = await driver.$("#user-slug")
    await slugField.setValue(slug);
    await driver.pause(1000);

    let websiteField = await driver.$("#user-website")
    await websiteField.setValue(website);
    await driver.pause(1000);

    let facebookField = await driver.$("#user-facebook")
    await facebookField.setValue(facebook);
    await driver.pause(1000);

    let twitterField = await driver.$("#user-twitter")
    await twitterField.setValue(twitter);
    await driver.pause(1000);

    await clickSaveOrUpdateButton(driver);
    await driver.pause(1000);
}

module.exports = {
    changeCredentials,
    changeAuthorInfo
}