const selectRandomPost = async function (driver) {
    let post = await driver.$$("a[class$='ember-view permalink gh-list-data gh-post-list-title']")
    await post[Math.floor(Math.random() * post.length)].click();
}

const clickNewPostButton = async function (driver) {
    let newPostButton = await driver.$("a[href$='#/posts/']")
    await newPostButton.click();
}

module.exports = {
    selectRandomPost,
    clickNewPostButton
}