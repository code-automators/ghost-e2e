const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on the New Tag button', async function () {
    let newTagButton = await this.driver.$("a[href$='#/tags/new/']")
    await newTagButton.click();
})