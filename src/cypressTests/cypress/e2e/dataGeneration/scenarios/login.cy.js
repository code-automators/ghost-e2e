import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import data from "./../aprioriData/login.json";
import { faker } from '@faker-js/faker';

describe("Login Scenarios", () => {
    it("[A Priori] Scenario 1: Login with invalid credentials", () => {
        // When the user wants to login with invalid credentials
        let signinPage = new SignInPage();
        signinPage.login(data.scenario1.email, data.scenario1.password);
        // Then the user should see an error message
        signinPage.checkForNonExistentUser().should("contain", "There is no user with that email address.")
    });

    it("[Pseudo Random] Scenario 2: Login with invalid credentials", () => {
        let signinPage = new SignInPage();
        // When the user wants to login with invalid credentials
        cy.request(`https://my.api.mockaroo.com/validLogin.json?key=${config.mockarooKey}`)
            .then((response) => {
                signinPage.login(response.body.email, response.body.password);
                // Then the user should see an error message
                signinPage.checkForNonExistentUser().should("contain", "There is no user with that email address.")
            })
    });

    it("[Random] Scenario 3: Login with invalid credentials", () => {
        // When the user wants to login with invalid credentials
        let signinPage = new SignInPage();
        signinPage.login(faker.internet.email(), faker.internet.password());
        // Then the user should see an error message
        signinPage.checkForNonExistentUser().should("contain", "There is no user with that email address.")
    });

    it("[A Priori] Scenario 4: Login with valid email but invalid password", () => {
        // When the user wants to login with valid email but invalid password
        let signinPage = new SignInPage();
        signinPage.login(config.user, data.scenario4.password);
        // Then the user should see an error message
        signinPage.checkForIncorrectPassword().should("contain", "Your password is incorrect.")
    });

    it("[Pseudo Random] Scenario 5: Login with valid email but invalid password", () => {
        // When the user wants to login with valid email but invalid password
        let signinPage = new SignInPage();
        cy.request(`https://my.api.mockaroo.com/validLogin.json?key=${config.mockarooKey}`)
            .then((response) => {
                signinPage.login(config.user, response.body.password);
                // Then the user should see an error message
                signinPage.checkForIncorrectPassword().should("contain", "Your password is incorrect.")
            })
    });

    it("[Random] Scenario 6: Login with valid email but invalid password", () => {
        // When the user wants to login with valid email but invalid password
        let signinPage = new SignInPage();
        signinPage.login(config.user, faker.internet.password());
        // Then the user should see an error message
        signinPage.checkForIncorrectPassword().should("contain", "Your password is incorrect.")
    });

    it("[A Priori] Scenario 7: Login with invalid multiplied credentials", () => {
        // When the user wants to login with invalid multiplied credentials
        let signinPage = new SignInPage();
        signinPage.login(data.scenario7.email, data.scenario7.password);
        // Then the user should see an error message
        signinPage.checkForErrorData().should("contain", "Please fill out the form to sign in.")
    });

    it("[Pseudo Random] Scenario 8: Login with invalid multiplied credentials", () => {
        // When the user wants to login with invalid multiplied credentials
        let signinPage = new SignInPage();
        cy.request(`https://my.api.mockaroo.com/invalidLogin.json?key=${config.mockarooKey}`)
            .then((response) => {
                signinPage.login(response.body.email, response.body.password);
                // Then the user should see an error message
                signinPage.checkForErrorData().should("contain", "Please fill out the form to sign in.")
            })
    });

    it("[Random] Scenario 9: Login with invalid multiplied credentials", () => {
        // When the user wants to login with invalid multiplied credentials
        let signinPage = new SignInPage();
        signinPage.login(faker.internet.email().repeat(25), faker.internet.password());
        // Then the user should see an error message
        signinPage.checkForErrorData().should("contain", "Please fill out the form to sign in.")
    });

    it("[A Priori] Scenario 118: Login with valid credentials", () => {
        // When the user wants to login with valid credentials
        let signinPage = new SignInPage();
        let homePage = signinPage.login(data.scenario118.email, data.scenario118.password);
        // Then the user should be redirected to the home page
        homePage.getUrl().should('eq', `${config.host}ghost/#/site`)
    });
});
