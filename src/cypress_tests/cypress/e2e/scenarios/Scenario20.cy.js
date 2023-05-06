import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";

describe("Cambiar credenciales del usuario e intentar acceder con credenciales viejas y nuevas", () => {

    it("Escenario 12", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        let settingsPage = homePage.goToGeneralSettings();
        settingsPage.changeSettingsAndMakePrivate('Test Website');
        let mainPage = homePage.goToMainPageSite();
        mainPage.checkIfSiteIsPrivate().should('contain', 'This site is private');

    })

})