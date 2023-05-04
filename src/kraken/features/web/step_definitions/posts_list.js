const { Given, When, Then } = require('@cucumber/cucumber');

When('I select a random post', async function () {
    let post = await this.driver.$("a[class$='ember-view permalink gh-list-data gh-post-list-title']")
    await post.click();
})

Then('The post with the new tag {kraken-string} should appear', async function (tagname) {
    let post = await this.driver.$("a[class$='gh-content-entry-title']")
    expect(await post.getText()).to.equal(tagname);
})