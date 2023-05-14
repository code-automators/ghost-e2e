const { Given, When, Then } = require("@cucumber/cucumber");
const { login } = require("./page_objects/login_page.js");
const { clickOnPostsTab } = require("./page_objects/admin_menu.js");
const { createPost } = require("./page_objects/post_details.js");
const { clickOnNewPost } = require("./page_objects/posts_list.js");
const { checkNewPostEdited } = require("./page_objects/post_details.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenshot.js");


Given("I login with {kraken-string} and {kraken-string} - Scenario thirteen", async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "Scenario13", "login");
});

When("I click on the Posts tab - Scenario thirteen", async function () {
    await clickOnPostsTab(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario13", "clickOnPostsTab");
});

When("I click on 'New Post' Button - Scenario thirteen", async function () {
    await clickOnNewPost(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario13", "clickOnNewPost");
});

When("I create a new post with {kraken-string}, {kraken-string} and schedule for day {kraken-string} and hour {kraken-string}",
    async function(title, content, scheduleDate, scheduleHour) {
        await createPost(this.driver, title, content, {scheduleDate, scheduleHour});
        await takeKrakenScreenshot(this.driver, "Scenario13", "createPost");
    }
);

Then("I should see the new post created called {kraken-string}", async function (page_title) {
    await checkNewPostEdited(this.driver, page_title);
    await takeKrakenScreenshot(this.driver, "Scenario13", "checkNewPostEdited");
});
