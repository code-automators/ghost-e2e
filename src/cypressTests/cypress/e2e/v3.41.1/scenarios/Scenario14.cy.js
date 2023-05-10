import { SignInPage } from "./../pages/signinPage.cy";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";
import config from "./../assets/config.json";


describe("Scenario14", () => {

    it("Cambiar banner de la página de inicio", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("login");
        // When user updates homepage banner
        let generalPage = homePage.goToGeneralSettings();
        takeCypressScreenshot("goToGeneralSettings");
        // And user deletes the banner
        generalPage.deleteBanner();
        takeCypressScreenshot("deleteBanner");
        homePage.goToMainPageSite();
        let withoutBanner = generalPage.verifyBanner();
        withoutBanner.should('have.class', 'no-image');
        homePage.goToGeneralSettings();
        // And user uploads a banner
        generalPage.uploadBanner(config.banner_path);
        takeCypressScreenshot("uploadBanner");
        // And user goes to the main page
        homePage.goToMainPageSite();
        takeCypressScreenshot("goToMainPageSite");
        let withBanner = generalPage.verifyBanner();
        // Then the updated banner is displayed on the home page
        withBanner.should('have.class', 'responsive-header-img');
        takeCypressScreenshot("checkNewBanner");
    })
})
