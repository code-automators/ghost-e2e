import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";


describe("Escenario 10", () => {

    it("Crear una integración personalizada", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a custom integration
        let integrationPage = homePage.goToIntegrationsList();
        let newIntegration = integrationPage.addIntegration(config.name_integration, config.description_integration);
        homePage.goToIntegrationsList();
        // the new custom integration is displayed in the list
        newIntegration.getListIntegrations().should('contain', config.name_integration);
    })
})
