import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";

describe("Cambiar credenciales del usuario e intentar acceder con credenciales viejas y nuevas", () => {

    it("Escenario 12", () => {
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
        signinPage.login(config.new_user, config.password)
        // The page should display incorrect password
        signinPage.checkForErrors().should("contain", "Your password is incorrect.");
        // The user tries to login with their new credentials
        homePage = signinPage.login(config.new_user, config.new_password);
        // The user should log in successfully
        homePage.getUrl().should('eq', 'http://localhost:2368/ghost/#/site')
    })

})