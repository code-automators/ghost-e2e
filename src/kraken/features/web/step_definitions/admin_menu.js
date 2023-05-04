const { Given, When, Then } = require('@cucumber/cucumber');

When ('I click on the Pages tab', async function () {
    let pagesButton = await this.driver.$("a[href$='#/pages/']")
    await pagesButton.click();
});
