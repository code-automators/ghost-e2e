const { Given, When, Then } = require('@cucumber/cucumber');
const { clickSaveOrUpdateButton } = require("./shared.js");

When('I fill out details about a new tag called {kraken-string} with image {kraken-string} and slug {kraken-string}', async function (tagname, image_path, slug) {
    await fillTagDetails(this.driver, tagname, image_path, slug);
})

When('I click on the save new tag button', async function () {
    await clickSaveOrUpdateButton(this.driver);
})

async function fillTagDetails(driver, tagname, image_path, slug) {
    let nameField = await driver.$("#tag-name")
    await nameField.setValue(tagname);
    let slugField = await driver.$("#tag-slug")
    await slugField.click();
    await driver.execute(slug => {
        slug.value = null
    }, slugField)
    await slugField.setValue(slug);
    let descriptionField = await driver.$("#tag-description")
    await descriptionField.setValue('This is a test tag, tested with Kraken :)');

    let colorPicker = await driver.$("input[name$='accent-color']")
    await colorPicker.setValue('000000');

    let imageField = await driver.$("input[class$='x-file--input']")
    await imageField.setValue(image_path);
}