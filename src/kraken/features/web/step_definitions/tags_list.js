const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on the New Tag button', async function () {
    await clickOnNewTag(this.driver);
})

async function clickOnNewTag(driver) {
    let newTagButton = await driver.$("a[href$='#/tags/new/']")
    await newTagButton.click();
}