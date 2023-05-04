const { Given, When, Then } = require('@cucumber/cucumber');


When('I fill out details about a new tag called {kraken-string} with image {kraken-string} and slug {kraken-string}', async function (tagname, image_path, slug) {
    let nameField = await this.driver.$("#tag-name")
    await nameField.setValue(tagname);
    let slugField = await this.driver.$("#tag-slug")
    await slugField.click();
    await this.driver.execute(slug => {
        slug.value = null
    }, slugField)
    await slugField.setValue(slug);
    let descriptionField = await this.driver.$("#tag-description")
    await descriptionField.setValue('This is a test tag, tested with Kraken :)');

    let colorPicker = await this.driver.$("input[name$='accent-color']")
    await colorPicker.setValue('000000');

    let imageField = await this.driver.$("input[class$='x-file--input']")
    await imageField.setValue(image_path);
})

When('I click on the save new tag button', async function () {
    let saveButton = await this.driver.$("button[class$='gh-btn gh-btn-blue gh-btn-icon ember-view']")
    await saveButton.click();
})