const expect = require('chai').expect;


const assignTagToPost = async function (driver, tagname) {
    let tagsField = await driver.$('#tag-input').$("input[class$='ember-power-select-trigger-multiple-input']")
    await tagsField.setValue(tagname);
    await driver.keys("Enter");
}

const checkIfPostUpdated = async function (driver, slug) {
    await driver.url('http://localhost:2368/ghost/#/posts?tag=' + slug)
    let postTitle = await driver.$("a[class$='ember-view permalink gh-list-data gh-post-list-title']")
    expect(postTitle).to.exist;
}

const fillEditPost = async function (driver, title) {
    let titlePost = await driver.$("textarea.gh-editor-title");
    await titlePost.setValue(title);
    let publishTrigger = await driver.$("div.gh-publishmenu-trigger");
    await publishTrigger.click();
    let publishButton = await driver.$("button.gh-btn-blue.gh-publishmenu-button");
    await publishButton.click();
}

const checkNewPostEdited = async function (driver, title) {
    let editedPost = await driver.$("li[class$='gh-list-row gh-posts-list-item']");
    expect(await editedPost.getText() == title)
}

module.exports = {
    assignTagToPost,
    checkIfPostUpdated,
    fillEditPost,
    checkNewPostEdited
}