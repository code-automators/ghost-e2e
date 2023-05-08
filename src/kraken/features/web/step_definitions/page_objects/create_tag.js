
const fillTagDetails = async function (driver, tagname, image_path, slug) {
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

const deleteTag = async function (driver) {
    const deleteButton = await driver.$(".gh-btn.gh-btn-red");
    await deleteButton.click();
}

const confirmDeleteTag = async function (driver) {
    const confirmDeleteButton = await driver.$$(".gh-btn.gh-btn-red")[1];
    await confirmDeleteButton.click();
}

module.exports = {
    fillTagDetails,
    deleteTag,
    confirmDeleteTag,
}
