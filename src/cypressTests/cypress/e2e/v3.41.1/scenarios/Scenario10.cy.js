import { SignInPage } from "../pages/signinPage.cy";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import config from "../assets/config.json";


describe("Scenario10", () => {

    it("Crear una integración personalizada", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("login");
        //when the user wants to create a custom integration
        let integrationPage = homePage.goToIntegrationsList();
        takeCypressScreenshot("goToIntegrationsList");
        //And the user add the custom integration
        let newIntegration = integrationPage.addIntegration(config.name_integration, config.description_integration);
        takeCypressScreenshot("addIntegration");
        homePage.goToIntegrationsList();
        // the new custom integration is displayed in the list
        newIntegration.getListIntegrations().should('contain', config.name_integration);
        takeCypressScreenshot("checkNewIntegration");
    })
})
