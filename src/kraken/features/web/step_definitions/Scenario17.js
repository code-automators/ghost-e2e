const { Given, When, Then } = require("@cucumber/cucumber");

const { login } = require("./page_objects/login_page.js");

const { clickOnProfileMenu } = require("./page_objects/admin_menu.js");
const { checkAuthorOptions } = require("./page_objects/author_page.js");
const { changeAuthorInfo } = require("./page_objects/profile_page.js");


Given(
    "I login with {kraken-string} and {kraken-string} - Scenario seventeen",
    async function (email, password) {
        await login(this.driver, email, password)
    }
);

When(
    "I click on the profile dropdown and access my profile - Scenario seventeen",
    async function () {
        await clickOnProfileMenu(this.driver);
    }
);

When(
    "I change my profile info with {kraken-string}, {kraken-string}, {kraken-string} and {kraken-string}",
    async function (slug, website, facebook, twitter){
        await changeAuthorInfo(
            this.driver,
            slug,
            website,
            facebook,
            twitter
        );
    }
);

Then("I navigate to authors page with slug {kraken-string}",
    async function (slug) {
        await this.driver.url(`http://localhost:2368/author/${slug}`);
    }
);

Then(
    "I should see the author options",
    async function () {
        await checkAuthorOptions(this.driver);
    }
);
