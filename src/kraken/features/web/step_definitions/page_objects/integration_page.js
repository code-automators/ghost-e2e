const expect = require('chai').expect;

const addIntegration = async function (driver, nameInt) {
    let integrationButton = await driver.$('div.apps-grid-cell.new-integration-cell');
    await integrationButton.click();
    let nameIntegration = await driver.$("input[name$='integration-name']");
    await nameIntegration.setValue(nameInt);
    console.log('Nombre: ' + nameIntegration.getText());
    let createButton = await driver.$('button.gh-btn.gh-btn-green');
    await createButton.click();
}

const saveDescription = async function (driver, description) {
    let descriptionIntegration = await driver.$("input#integration_description");
    await descriptionIntegration.setValue(description);
    let saveButton = await driver.$('button.gh-btn-blue');
    await saveButton.click();
}

const checkNewIntegration = async function (driver, nameInt) {
    let newIntegration = await driver.$('div.apps-grid-cell');
    expect(await newIntegration.getText() == nameInt);
}

module.exports = {
    addIntegration,
    checkNewIntegration,
    saveDescription
}