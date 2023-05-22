import { SignInPage } from "../pages/signinPage.cy";
import data from "../aprioriData/navOptions.json";
import config from "../assets/config.json";
import { faker } from "@faker-js/faker";

describe("Nav Option Scenarios", () => {

    it("[A Priori] Scenario 37: Add a new option to the navigation menu", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to add a new option to the navbar menu, he goes to the design page
        let designPage = homePage.goToDesignPage();
        // And the user adds an option to the navigation menu
        designPage.addNavigationOption(data.scenario37.label, data.scenario37.uri);
        // And the user goes back into the main page site
        let mainPage = homePage.goToMainPageSite();
        // Then the new navigation option should be visible in main page site
        mainPage.getNavbarMenu().should("contain", data.scenario37.label);
    });


    it("[Pseudo Random] Scenario 38: Add a new option to the navigation menu", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to add a new option to the navbar menu, he goes to the design page
        let designPage = homePage.goToDesignPage();
        // And the user adds an option to the navigation menu
        cy.request(`https://my.api.mockaroo.com/validNavOption.json?key=${config.mockarooKey}`)
            .then((response) => {
                designPage.addNavigationOption(response.body.label, response.body.slug);
                // And the user goes back into the main page site
                let mainPage = homePage.goToMainPageSite();
                // Then the new navigation option should be visible in main page site
                mainPage.getNavbarMenu().should("contain", response.body.label);
            })
    });


    it("[Random] Scenario 39: Add a new option to the navigation menu", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to add a new option to the navbar menu, he goes to the design page
        let designPage = homePage.goToDesignPage();
        // And the user adds an option to the navigation menu
        let scenarioLabel = faker.person.firstName();
        designPage.addNavigationOption(scenarioLabel, faker.lorem.slug());
        // And the user goes back into the main page site
        let mainPage = homePage.goToMainPageSite();
        // Then the new navigation option should be visible in main page site
        mainPage.getNavbarMenu().should("contain", scenarioLabel);
    });


    it("[A Priori] Scenario 40: Attempt to add an invalid option to the navigation menu", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to add a new option to the navbar menu, he goes to the design page
        let designPage = homePage.goToDesignPage();
        // And the user adds an option to the navigation menu
        designPage.addNavigationOption(data.scenario40.label, data.scenario40.uri, false);
        // Then the new navigation option should not exist
        let mainPage = homePage.goToMainPageSite();
        mainPage.getNavbarMenu().should("not.contain", data.scenario40.label);
    });

    it("[Pseudo Random] Scenario 41: Attempt to add an invalid option to the navigation menu", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to add a new option to the navbar menu, he goes to the design page
        let designPage = homePage.goToDesignPage();
        // And the user adds an option to the navigation menu
        cy.request(`https://my.api.mockaroo.com/invalidNavOption.json?key=${config.mockarooKey}`)
            .then((response) => {
                designPage.addNavigationOption(response.body.label, response.body.slug, false);
                // Then the new navigation option should not exist
                let mainPage = homePage.goToMainPageSite();
                mainPage.getNavbarMenu().should("not.contain", response.body.label);
            })
    });

    it("[Random] Scenario 42: Attempt to add an invalid option to the navigation menu", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to add a new option to the navbar menu, he goes to the design page
        let designPage = homePage.goToDesignPage();
        // And the user adds an option to the navigation menu
        let scenarioLabel = faker.lorem.paragraph(1000);
        designPage.addNavigationOption(scenarioLabel, faker.lorem.slug(), false);
        // Then the new navigation option should not exist
        let mainPage = homePage.goToMainPageSite();
        mainPage.getNavbarMenu().should("not.contain", scenarioLabel);
    });
});