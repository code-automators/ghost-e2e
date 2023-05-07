import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";

describe("Change user password and login using these new password.", () => {

    it("Scenario 17", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change their password
        let profilePage = homePage.goToProfile();
        // The user changes their password
        profilePage.changeCredentials(config.user, config.new_password, config.password);
        // The user logs out
        signinPage = homePage.logout();
        homePage = signinPage.login(config.user, config.new_password);
        // Then the user log in successfully with new password
        homePage.getUrl().should("eq", "http://localhost:2368/ghost/#/site");
    })

})