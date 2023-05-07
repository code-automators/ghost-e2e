import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";


describe("Publicar una nueva página", () => {
    it("Scenario 5", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to add a new option to the navbar menu
        // The user goes to the design page
        let designPage = homePage.goToDesignPage();
        // The user adds an option to the navigation menu
        designPage.addNavigationOption("LABEL DE OPCIÓN", "URL SIMULADA");
        // The user goes back into the main page site
        homePage.goToMainPageSite();
        // Then the new navigation option should be visible in main page site
        homePage.getNavbarMenu().should("contain", "LABEL DE OPCIÓN");
    })
})