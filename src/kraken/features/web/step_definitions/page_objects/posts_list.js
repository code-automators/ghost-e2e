const selectRandomPost = async function (driver) {
    let post = await driver.$$("a[class$='ember-view permalink gh-list-data gh-post-list-title']")
    await post[Math.floor(Math.random() * post.length)].click();
}

module.exports = {
    selectRandomPost
}