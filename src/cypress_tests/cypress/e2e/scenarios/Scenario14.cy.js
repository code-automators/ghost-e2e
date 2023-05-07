import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";


describe("Escenario 14", () => {

    it("Cambiar banner de la página de inicio", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When user updates homepage banner
        let generalPage = homePage.goToGeneralSettings();
        /*generalPage.deleteBanner();
        homePage.goToMainPageSite();
        let withoutBanner = generalPage.verifyBanner();
        withoutBanner.should('have.class', 'no-image');
        homePage.goToGeneralSettings();*/
        generalPage.uploadBanner(config.banner_path);
        homePage.goToMainPageSite();
        let withBanner = generalPage.verifyBanner();
        // Then the updated banner is displayed on the home page
        withBanner.should('have.class', 'responsive-header-img');
    })
})
