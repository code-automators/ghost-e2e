const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('./page_objects/login_page.js');
const { clickOnPostsTab } = require('./page_objects/admin_menu.js');
const { createPost, addImage, checkPostUpdated } = require('./page_objects/post_details.js');
const { clickOnNewPost } = require('./page_objects/posts_list.js');
const { clickOnCloseSettings, publishItem } = require('./page_objects/shared.js');

Given('I login with {kraken-string} and {kraken-string} - Scenario six', async function (email, password) {
    await login(this.driver, email, password);
});

When('I click on the Posts tab - Scenario six', async function () {
    await clickOnPostsTab(this.driver);
});

When('I click on New Post Button', async function () {
    await clickOnNewPost(this.driver);
});

When('I create a post with {kraken-string} and {kraken-string}', async function(title, content) {
    await createPost(this.driver, title, content);
});

When('I add an image with path {kraken-string}', async function(image_path){
    await addImage(this.driver, image_path);
});

When('I click on close settings', async function () {
    await clickOnCloseSettings(this.driver);
});

When('I click update on the published post', async function () {
    await publishItem(this.driver);
})

Then('the post should be updated with the image', async function () {
    await checkPostUpdated(this.driver);
});