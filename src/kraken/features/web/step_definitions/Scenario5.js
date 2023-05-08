const { Given, When, Then } = require("@cucumber/cucumber");
const { login } = require("./page_objects/login_page.js");
const { clickOnDesignTab } = require("./page_objects/admin_menu.js");
const { checkNavigationOption } = require('./page_objects/home_page.js');
const { addNavigationOption } = require("./page_objects/design_page.js");


Given(
    "I login with {kraken-string} and {kraken-string} - Scenario fifth",
    async function (email, password) {
        await login(this.driver, email, password);
    }
);

When(
    "I click on the Design tab - Scenario fifth",
    async function () {
        await clickOnDesignTab(this.driver);
    }
);

When(
    "I add an option {kraken-string} with {kraken-string} in nav menu",
    async function (optionLabel, optionUrl) {
        await addNavigationOption(this.driver, optionLabel, optionUrl);
    }
);

Then(
    "I should see the new navigation option called {kraken-string}",
    async function (optionLabel) {
        await checkNavigationOption(this.driver, optionLabel);
    }
);
