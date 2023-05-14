import { HomePage } from "./../pages/homePage.cy";
import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";

describe("Scenario20", () => {

    it("Changing the website's general settings and making it private", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("login")
        // When the user wants to change the blog's settings
        let settingsPage = homePage.goToGeneralSettings();
        takeCypressScreenshot("goToSettings")
        // And the user changes the settings and makes the blog private
        settingsPage.changeSettingsAndMakePrivate(config.new_site_name);
        takeCypressScreenshot("changeSettingsAndMakePrivate")
        // Then when the user goes to the main page, it should be private
        let mainPage = homePage.goToMainPageSite();
        mainPage.checkIfSiteIsPrivate().should('contain', 'This site is private');
        takeCypressScreenshot("checkIfSiteIsPrivate")
    })

    after(() => {
        let homePage = new HomePage();
        let settingsPage = homePage.goToGeneralSettings();
        settingsPage.togglePrivate();
    })

})