const { Given, When, Then } = require('@cucumber/cucumber');

When('I fill out the code injection section with {kraken-string}',
    async function (header_code) {
    let headerBlock = await this.driver.$("div[class$='CodeMirror-scroll']")
    await headerBlock.setValue(header_code);
})

When('I click on the code injection save button', async function () {
    let saveButton = await this.driver.$("button[class$='gh-btn gh-btn-blue gh-btn-icon ember-view']")
    await saveButton.click();
})