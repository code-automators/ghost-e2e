const expect = require('chai').expect;


const assignTagToPost = async function (driver, tagname) {
    let tagsField = await driver.$('#tag-input').$("input[class$='ember-power-select-trigger-multiple-input']")
    await tagsField.setValue(tagname);
    await driver.keys("Enter");
}

const assignMultipleTagsToPost = async function (driver) {
    let tagsField = await driver.$('#tag-input').$("input[class$='ember-power-select-trigger-multiple-input']")
    await tagsField.setValue('tag1');
    await driver.keys("Enter");
    await tagsField.setValue('tag2');
    await driver.keys("Enter");
    await tagsField.setValue('tag3');
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

const fillPostName = async function (driver, title) {
    let titlePost = await driver.$("textarea.gh-editor-title");
    await titlePost.setValue(title);
}

const clickOutsideSettings = async function (driver, title) {
    let titlePost = await driver.$("textarea.gh-editor-title");
    await titlePost.click();
}

const checkNewPostEdited = async function (driver, title) {
    let editedPost = await driver.$("li[class$='gh-list-row gh-posts-list-item']");
    expect(await editedPost.getText() == title);
}

/**
 * Creates a new post with given information
 * @param {*} driver The driver needed to operate 
 * @param {*} title Title of the post
 * @param {*} content Content of the post
 * @param {*} additionalProps Additional properties for creating the post
 */
const createPost = async function (
    driver,
    title,
    content,
    additionalProps = {}
) {
    const { tagname, scheduleDate, scheduleHour } = additionalProps;
    let titlePost = await driver.$("textarea.gh-editor-title");
    await titlePost.setValue(title);
    await driver.pause(1000);
    let contentPost = await driver.$('div.koenig-editor__editor');
    await contentPost.setValue(content);
    await driver.pause(1000);

    // Add the tag when its the case
    if (tagname) {
        // Open settings
        const settingsButton = await driver.$("button[title$='Settings']");
        await settingsButton.click();
        await driver.pause(1000);

        // Add tag
        let tagsField = await driver.$('#tag-input').$("input[class$='ember-power-select-trigger-multiple-input']");
        await driver.pause(1000);
        await tagsField.setValue(tagname);
        await driver.pause(1000);
        await driver.keys("Enter");
        await driver.pause(1000);

        // Close settings
        const closeButton = await driver.$("button[aria-label$='Close']");
        await closeButton.click();
    }

    await driver.pause(1000);
    let publishTrigger = await driver.$('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger');
    await publishTrigger.click();

    // Add schedule when its the case
    if (scheduleDate && scheduleHour) {
        await driver.pause(2000);
        let radioButtons = await driver.$$("div[class$='gh-publishmenu-radio-button'");
        const scheduleRadioButton = radioButtons[1];
        await scheduleRadioButton.click();
        await driver.pause(1000);

        let dateInput = await driver.$("div[class$='gh-date-time-picker-date '").$("input");
        await dateInput.setValue(scheduleDate);
        await driver.pause(2000);
        // let hourInput = await driver.$("div[class$='gh-date-time-picker-time '").$("input");
        // await hourInput.setValue(scheduleHour);
        await driver.keys("Tab");
        await driver.keys(scheduleHour);
        // await driver.keys("Enter");
        await driver.pause(2000);
    }

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

const selectPostToDelete = async function (driver, title) {
    let publishedPosts = await driver.$$("h3[class$='gh-content-entry-title']");
    for (let post of publishedPosts) {
        if (await post.getText() === title) {
            await post.click();
            break;
        }
    }
}

const deletePost = async function (driver) {
    let settingsButton = await driver.$("button[title$='Settings']");
    await settingsButton.click();
    let deleteButton = await driver.$('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
    await deleteButton.click();
}

const clickConfirmDelete = async function (driver) {
    let redButton = await driver.$('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    await redButton.click();
}

module.exports = {
    assignTagToPost,
    assignMultipleTagsToPost,
    checkIfPostUpdated,
    fillEditPost,
    fillPostName,
    clickOutsideSettings,
    checkNewPostEdited,
    createPost,
    addImage,
    checkPostUpdated,
    selectPostToDelete,
    deletePost,
    clickConfirmDelete
}