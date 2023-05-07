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
    expect(await editedPost.getText() == title);
}

const createPost = async function (driver, title, content) {
    let titlePost = await driver.$("textarea.gh-editor-title");
    await titlePost.setValue(title);
    let contentPost = await driver.$('div.koenig-editor__editor');
    await contentPost.setValue(content);
    let publishTrigger = await driver.$('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger');
    await publishTrigger.click();
    let publishButton = await driver.$('button.gh-btn-blue.gh-publishmenu-button');
    await publishButton.click();
}

const addImage = async function (driver, image_path) {
    let settingsButton = await driver.$("button[title$='Settings']");
    await settingsButton.click();
    let imageSelector = await driver.$("input[class$='x-file--input']");
    await imageSelector.setValue(image_path);
}

const checkPostUpdated = async function (driver) {
    let updatedMessage = await driver.$("span[class$='gh-notification-title']");
    expect(await updatedMessage.getText() == "Updated");
}

module.exports = {
    assignTagToPost,
    checkIfPostUpdated,
    fillEditPost,
    checkNewPostEdited,
    createPost,
    addImage,
    checkPostUpdated
}