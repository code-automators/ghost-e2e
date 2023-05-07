const selectRandomPost = async function (driver) {
    let post = await driver.$$("a[class$='ember-view permalink gh-list-data gh-post-list-title']")
    await post[Math.floor(Math.random() * post.length)].click();
}

const clickListPostButton = async function (driver) {
    let listPostButton = await driver.$("a[href$='#/posts/']");
    await listPostButton.click();
}

const clickOnNewPost = async function (driver) {
    let newPostButton = await driver.$("a[href$='#/editor/post/']");
    await newPostButton.click();
}

module.exports = {
    selectRandomPost,
    clickListPostButton,
    clickOnNewPost
}