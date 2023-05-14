const expect = require('chai').expect;

const clickAddIntegration = async function (driver) {
    let addButton = await driver.$('div.apps-grid-cell.new-integration-cell');
    await addButton.click();
}

const addNameIntegration = async function (driver, nameInt) {
    let nameIntegration = await driver.$("input[name$='integration-name']");
    await nameIntegration.setValue(nameInt);
}

const clickCreateIntegration = async function (driver) {
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
    expect(await newIntegration.getText() == nameInt).to.be.true;
}

module.exports = {
    clickAddIntegration,
    addNameIntegration,
    checkNewIntegration,
    clickCreateIntegration,
    saveDescription
}