import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import data from "./../aprioriData/integration.json";
import { faker } from '@faker-js/faker';

describe("Integration Scenarios", () => {
    it("[A Priori] Scenario 34: Add integration with valid data", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a custom integration
        let integrationPage = homePage.goToIntegrationsList();
        //And the user add the custom integration
        let newIntegration = integrationPage.addIntegration(data.scenario34.name, data.scenario34.description);
        homePage.goToIntegrationsList();
        // the new custom integration is displayed in the list
        newIntegration.getListIntegrations().should('contain', data.scenario34.name);
    });

    it("[Pseudo Random] Scenario 35: Add integration with valid data", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a custom integration
        let integrationPage = homePage.goToIntegrationsList();
        //And the user add the custom integration
        cy.request(`https://my.api.mockaroo.com/validIntegration.json?key=${config.mockarooKey}`)
            .then((response) => {
                let newIntegration = integrationPage.addIntegration(response.body.name, response.body.description);
                homePage.goToIntegrationsList();
                // the new custom integration is displayed in the list
                newIntegration.getListIntegrations().should('contain', response.body.name);
            })
    });

    it("[Random] Scenario 36: Add integration with valid data", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a custom integration
        let integrationPage = homePage.goToIntegrationsList();
        //And the user add the custom integration
        let nameIntegration = faker.lorem.text();
        let newIntegration = integrationPage.addIntegration(nameIntegration, faker.lorem.paragraph());
        homePage.goToIntegrationsList();
        // the new custom integration is displayed in the list
        newIntegration.getListIntegrations().should('contain', nameIntegration);
    });

})