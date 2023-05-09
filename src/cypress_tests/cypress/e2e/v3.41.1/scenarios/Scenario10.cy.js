import { SignInPage } from "../pages/signinPage.cy";
import { takeCypressScreenshot } from "./utils/takeScreenshot";
import config from "./assets/config.json";


describe("Escenario 10", () => {

    it("Crear una integración personalizada", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("Scenario10", "login");
        //when the user wants to create a custom integration
        let integrationPage = homePage.goToIntegrationsList();
        takeCypressScreenshot("Scenario10", "goToIntegrationsList");
        //And the user add the custom integration
        let newIntegration = integrationPage.addIntegration(config.name_integration, config.description_integration);
        takeCypressScreenshot("Scenario10", "addIntegration");
        homePage.goToIntegrationsList();
        // the new custom integration is displayed in the list
        newIntegration.getListIntegrations().should('contain', config.name_integration);
        takeCypressScreenshot("Scenario10", "checkNewIntegration");
    })
})
