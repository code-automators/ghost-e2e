const addNavigationOption = async (driver, optionLabel, optionUrl) => {
    let inputFields = await driver.$$("input[class$='ember-text-field gh-input ember-view']");
    let inputFieldsAmount = inputFields.length;
    await driver.pause(1000);

    inputFields[inputFieldsAmount - 4].setValue(optionLabel);
    await driver.pause(1000);

    inputFields[inputFieldsAmount - 3].setValue(optionUrl);
    await driver.pause(1000);

    let saveButton = await driver.$("button[class$='gh-btn gh-btn-blue gh-btn-icon ember-view']");
    await saveButton.click();
}


module.exports = {
    addNavigationOption
}