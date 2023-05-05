const { Given, When, Then } = require('@cucumber/cucumber');

When('I select a random post', async function () {
    await selectRandomPost(this.driver);
})

Then('The post with the new tag {kraken-string} should appear', async function (tagname) {
    await checkIfPostWithTagAppears(this.driver, tagname);
})

async function selectRandomPost(driver) {
    let post = await driver.$("a[class$='ember-view permalink gh-list-data gh-post-list-title']")
    await post.click();
}

async function checkIfPostWithTagAppears(driver, tagname) {
    let post = await driver.$("a[class$='gh-content-entry-title']")
    expect(await post.getText()).to.equal(tagname);
}