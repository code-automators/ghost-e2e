import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import data from "./../aprioriData/generalSettings.json";
import { faker } from '@faker-js/faker';

describe("General Settings Scenarios", () => {
    it("[A Priori] Scenario 22: Editar settings generales válidos (publication info)", () => {
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


    it("[Pseudo Random] Scenario 23: Editar settings generales válidos (publication info)", () => {
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

    it("[Random] Scenario 24: Editar settings generales válidos (publication info)", () => {
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
})