const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on the Pages tab', async function () {
    await clickOnPagesTab(this.driver)
});

When('I click on the Code Injection tab', async function () {
    await clickOnCodeInjectionTab(this.driver)
})

When('I click on the Tags tab', async function () {
    await clickOnTagsTab(this.driver)
})

When('I click on the Posts tab', async function () {
    await clickOnPostsTab(this.driver)
})

async function clickOnPagesTab(driver) {
    let pagesButton = await driver.$("a[href$='#/pages/']")
    await pagesButton.click();
}

async function clickOnCodeInjectionTab(driver) {
    let codeInjectionButton = await driver.$("a[href$='#/settings/code-injection/']")
    await codeInjectionButton.click();
}

async function clickOnTagsTab(driver) {
    let tagsButton = await driver.$("a[href$='#/tags/']")
    await tagsButton.click();
}

async function clickOnPostsTab(driver) {
    let postsButton = await driver.$("a[href$='#/posts/']")
    await postsButton.click();
}