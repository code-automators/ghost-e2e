const expect = require('chai').expect;


const clickOnNewTag = async function (driver) {
    let newTagButton = await driver.$("a[href$='#/tags/new/']")
    await newTagButton.click();
}

const clickOnTagBySlug = async function (driver, slug) {
    let newTagButton = await driver.$(`a[href$='#/tags/${slug}/']`);
    await newTagButton.click();
}

const getTagList = async function (driver) {
    let tagList = await driver.$$("li.gh-list-row");
    return tagList;
}

const checkTagByName = async function (driver, tagName) {
    const tagList = await getTagList(driver);
    let tagFound = false;
    for (let i = 0; i < tagList.length; i++) {
        const tag = tagList[i];
        const tagNameText = await tag.$("h3");
        if (tagNameText == tagName) {
            tagFound = true
            break;
        }
    }
    expect(tagFound).to.be.true;
}

module.exports = {
    clickOnNewTag,
    getTagList,
    checkTagByName,
    clickOnTagBySlug,
}
