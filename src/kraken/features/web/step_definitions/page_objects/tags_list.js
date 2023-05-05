

const clickOnNewTag = async function(driver) {
    let newTagButton = await driver.$("a[href$='#/tags/new/']")
    await newTagButton.click();
}

module.exports = {
    clickOnNewTag
}