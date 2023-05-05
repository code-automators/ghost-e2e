const { Given, When, Then } = require('@cucumber/cucumber');



Then('The post with the new tag {kraken-string} should appear', async function (tagname) {
    await checkIfPostWithTagAppears(this.driver, tagname);
})

const selectRandomPost = async function (driver) {
    let post = await driver.$("a[class$='ember-view permalink gh-list-data gh-post-list-title']")
    await post.click();
}

const checkIfPostWithTagAppears = async function (driver, tagname) {
    let post = await driver.$("a[class$='gh-content-entry-title']")
    expect(await post.getText()).to.equal(tagname);
}

module.exports = {
    selectRandomPost,
    checkIfPostWithTagAppears
}