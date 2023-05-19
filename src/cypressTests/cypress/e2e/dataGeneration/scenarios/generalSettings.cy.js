import { SignInPage } from "./../pages/signinPage.cy";
import { HomePage } from "../pages/homePage.cy";
import config from "./../assets/config.json";
import data from "./../aprioriData/generalSettings.json";
import { faker } from '@faker-js/faker';

describe("General Settings Scenarios", () => {
    it("[A Priori] Scenario 22: Edit valid general settings (publication info)", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the blog's settings
        let settingsPage = homePage.goToGeneralSettings();
        // And the user changes the blog settings
        settingsPage.changeSettings(data.scenario22.siteName, data.scenario22.siteDescription, data.scenario22.siteLanguage);
        let mainPage = homePage.goToMainPageSite();
        mainPage.getPageItem(data.scenario22.siteName).should("exist");
        mainPage.getPageItem(data.scenario22.siteDescription).should("exist");
    })


    it("[Pseudo Random] Scenario 23: Edit valid general settings (publication info)", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the blog's settings
        let settingsPage = homePage.goToGeneralSettings();
        // And the user changes the blog settings
        cy.request(`https://my.api.mockaroo.com/validSettingsPublicationInfo.json?key=${config.mockarooKey}`)
            .then((response) => {
                settingsPage.changeSettings(response.body.siteName, response.body.siteDescription, response.body.siteLanguage);
                let mainPage = homePage.goToMainPageSite();
                mainPage.getPageItem(response.body.siteName).should("exist");
                mainPage.getPageItem(response.body.siteDescription).should("exist");
            })
    })

    it("[Random] Scenario 24: Edit valid general settings (publication info)", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the blog's settings
        let settingsPage = homePage.goToGeneralSettings();
        // And the user changes the blog settings
        let siteName = faker.company.name();
        let siteDescription = faker.company.catchPhrase();
        settingsPage.changeSettings(siteName, siteDescription, faker.helpers.arrayElement(['en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'zh', 'ko']));
        let mainPage = homePage.goToMainPageSite();
        mainPage.getPageItem(siteName).should("exist");
        mainPage.getPageItem(siteDescription).should("exist");
    })

    it("[A Priori] Scenario 25: Edit invalid general settings (publication info)", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the blog's settings
        let settingsPage = homePage.goToGeneralSettings();
        // And the user changes the blog settings
        settingsPage.changeSettings(data.scenario25.siteName, data.scenario25.siteDescription, data.scenario25.siteLanguage, false);
        settingsPage.getTitleError().should("exist");
        settingsPage.getDescriptionError().should("exist");
    })


    it("[Pseudo Random] Scenario 26: Edit invalid general settings (publication info)", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the blog's settings
        let settingsPage = homePage.goToGeneralSettings();
        // And the user changes the blog settings
        cy.request(`https://my.api.mockaroo.com/invalidSettingsPublicationInfo.json?key=${config.mockarooKey}`)
            .then((response) => {
                settingsPage.changeSettings(response.body.siteName, response.body.siteDescription, response.body.siteLanguage, false);
                settingsPage.getTitleError().should("exist");
                settingsPage.getDescriptionError().should("exist");
            })
    })

    it("[Random] Scenario 27: Edit invalid general settings (publication info)", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the blog's settings
        let settingsPage = homePage.goToGeneralSettings();
        // And the user changes the blog settings
        settingsPage.changeSettings(faker.lorem.paragraphs(3), faker.lorem.paragraphs(8), faker.lorem.paragraphs(3), false);
        settingsPage.getTitleError().should("exist");
        settingsPage.getDescriptionError().should("exist");
    })

    it("[Random] Scenario 120: Make the website private and change password", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the blog's settings
        let settingsPage = homePage.goToGeneralSettings();
        // And the user changes the settings and makes the blog private
        let scenarioPassword = faker.internet.password();
        settingsPage.togglePrivateAndChangePassword(scenarioPassword);
        // Then when the user goes to the main page, it should be private
        let mainPage = homePage.goToMainPageSite();
        mainPage.checkIfSiteIsPrivate().should('contain', 'This site is private');
        mainPage.loginPrivateSite(scenarioPassword);
    })

    after(() => {
        let homePage = new HomePage();
        let settingsPage = homePage.goToGeneralSettings();
        settingsPage.togglePrivate();
    })
})