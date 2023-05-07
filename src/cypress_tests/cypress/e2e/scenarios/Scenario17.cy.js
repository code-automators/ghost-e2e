import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";

describe("Change user password", () => {

    it("Scenario 17", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change their user and password
        let profilePage = homePage.goToProfile();
        // The user changes their credentials
        profilePage.changeCredentials(config.new_user, config.new_password, config.password)
        // The user logs out
        signinPage = homePage.logout()
        // Then if the user tries to log in with old credentials, Ghost should show an error
        homePage = signinPage.login(config.new_user, config.new_password);
        // The user should log in successfully
        homePage.getUrl().should('eq', 'http://localhost:2368/ghost/#/site')
    })

})