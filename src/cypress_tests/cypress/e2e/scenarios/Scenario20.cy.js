import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";

describe("Cambiar credenciales del usuario e intentar acceder con credenciales viejas y nuevas", () => {

    it("Escenario 12", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the blog's settings
        let settingsPage = homePage.goToGeneralSettings();
        // The user changes the settings and makes the blog private
        settingsPage.changeSettingsAndMakePrivate(config.new_site_name);
        // Then when the user goes to the main page, it should be private
        let mainPage = homePage.goToMainPageSite();
        mainPage.checkIfSiteIsPrivate().should('contain', 'This site is private');

    })

})