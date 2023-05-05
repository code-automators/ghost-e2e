const { Given, When, Then } = require('@cucumber/cucumber');


When('I click on the Code Injection tab', async function () {
    await clickOnCodeInjectionTab(this.driver)
})


When('I click on the Posts tab', async function () {
    await clickOnPostsTab(this.driver)
})

const clickOnPagesTab = async function (driver) {
    let pagesButton = await driver.$("a[href$='#/pages/']")
    await pagesButton.click();
}

const clickOnCodeInjectionTab = async function (driver) {
    let codeInjectionButton = await driver.$("a[href$='#/settings/code-injection/']")
    await codeInjectionButton.click();
}

const clickOnTagsTab = async function (driver) {
    let tagsButton = await driver.$("a[href$='#/tags/']")
    await tagsButton.click();
}

const clickOnPostsTab = async function (driver) {
    let postsButton = await driver.$("a[href$='#/posts/']")
    await postsButton.click();
}

module.exports = {
    clickOnPagesTab,
    clickOnCodeInjectionTab,
    clickOnTagsTab,
    clickOnPostsTab
}