import { HomePage } from "./../pages/homePage.cy";
import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";

describe("Scenario 12", () => {

    it("Changing admin user credentials and trying to login both with valid and invalid creds", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("Scenario12", "login")
        // When the user wants to change their user and password
        let profilePage = homePage.goToProfile();
        takeCypressScreenshot("Scenario12", "goToProfile")
        // And the user changes their credentials
        profilePage.changeCredentials(config.new_user, config.new_password, config.password)
        takeCypressScreenshot("Scenario12", "changeCredentials")
        // And the user logs out
        signinPage = homePage.logout()
        takeCypressScreenshot("Scenario12", "logout")
        // And then if the user tries to log in with old credentials, Ghost should show an error
        signinPage.login(config.new_user, config.password)
        takeCypressScreenshot("Scenario12", "loginWithOldCreds")
        // And the page should display incorrect password
        signinPage.checkForErrors().should("contain", "Your password is incorrect.");
        takeCypressScreenshot("Scenario12", "checkForErrors")
        // And the user tries to login with their new credentials
        homePage = signinPage.login(config.new_user, config.new_password);
        takeCypressScreenshot("Scenario12", "loginWithNewCreds")
        // Then the user should log in successfully
        homePage.getUrl().should('eq', 'http://34.171.125.255:3411/ghost/#/site')
        takeCypressScreenshot("Scenario12", "checkLoginWithNewCreds")
    })

    after(() => {
        let homePage = new HomePage();
        let profilePage = homePage.goToProfile();
        profilePage.changeCredentials(config.user, config.password, config.new_password)
    })

})