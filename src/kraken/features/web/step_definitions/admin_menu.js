const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on the Pages tab', async function () {
    let pagesButton = await this.driver.$("a[href$='#/pages/']")
    await pagesButton.click();
});


When('I click on the Code Injection tab', async function () {
    let codeInjectionButton = await this.driver.$("a[href$='#/settings/code-injection/']")
    await codeInjectionButton.click();
})

When('I click on the Tags tab', async function () {
    let tagsButton = await this.driver.$("a[href$='#/tags/']")
    await tagsButton.click();
})

When('I click on the Posts tab', async function () {
    let postsButton = await this.driver.$("a[href$='#/posts/']")
    await postsButton.click();
})