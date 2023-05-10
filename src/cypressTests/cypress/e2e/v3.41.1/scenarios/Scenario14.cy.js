import { SignInPage } from "../pages/signinPage.cy";
import { takeCypressScreenshot } from "./utils/takeScreenshot";
import config from "./assets/config.json";


describe("Escenario 14", () => {

    it("Cambiar banner de la página de inicio", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("Scenario14", "login");
        // When user updates homepage banner
        let generalPage = homePage.goToGeneralSettings();
        takeCypressScreenshot("Scenario14", "goToGeneralSettings");
        // And user deletes the banner
        generalPage.deleteBanner();
        takeCypressScreenshot("Scenario14", "deleteBanner");
        homePage.goToMainPageSite();
        let withoutBanner = generalPage.verifyBanner();
        withoutBanner.should('have.class', 'no-image');
        homePage.goToGeneralSettings();
        // And user uploads a banner
        generalPage.uploadBanner(config.banner_path);
        takeCypressScreenshot("Scenario14", "uploadBanner");
        // And user goes to the main page
        homePage.goToMainPageSite();
        takeCypressScreenshot("Scenario14", "goToMainPageSite");
        let withBanner = generalPage.verifyBanner();
        // Then the updated banner is displayed on the home page
        withBanner.should('have.class', 'responsive-header-img');
        takeCypressScreenshot("Scenario14", "checkNewBanner");
    })
})
