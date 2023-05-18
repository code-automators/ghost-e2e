import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import data from "./aprioriData/login.json";
import { faker } from '@faker-js/faker';

describe("Login Scenarios", () => {
    it("[A Priori] Scenario 1: Login with invalid credentials", () => {
        let signinPage = new SignInPage();
        signinPage.login(data.scenario1.email, data.scenario1.password);
        signinPage.checkForNonExistentUser().should("contain", "There is no user with that email address.")
    });

    it("[Pseudo Random] Scenario 2: Login with invalid credentials", () => {
        let signinPage = new SignInPage();
        cy.request(`https://my.api.mockaroo.com/validLogin.json?key=${config.mockarooKey}`)
        .then((response) => {
            signinPage.login(response.body.email, response.body.password);
            signinPage.checkForNonExistentUser().should("contain", "There is no user with that email address.")
        })
    });

    it("[Random] Scenario 3: Login with invalid credentials", () => {
        let signinPage = new SignInPage();
        signinPage.login(faker.internet.email(), faker.internet.password());
        signinPage.checkForNonExistentUser().should("contain", "There is no user with that email address.")
    });

    it("[A Priori] Scenario 4: Login with valid email but invalid password", () => {
        let signinPage = new SignInPage();
        signinPage.login(config.user, data.scenario2.password);
        signinPage.checkForIncorrectPassword().should("contain", "Your password is incorrect.")
    });

    it("[Pseudo Random] Scenario 5: Login with valid email but invalid password", () => {
        let signinPage = new SignInPage();
        cy.request(`https://my.api.mockaroo.com/validLogin.json?key=${config.mockarooKey}`)
        .then((response) => {
            signinPage.login(config.user, response.body.password);
            signinPage.checkForNonExistentUser().should("contain", "There is no user with that email address.")
        })
    });

    it("[Random] Scenario 6: Login with valid email but invalid password", () => {
        let signinPage = new SignInPage();
        signinPage.login(config.user, faker.internet.password());
        signinPage.checkForIncorrectPassword().should("contain", "Your password is incorrect.")
    });

    it("[A Priori] Scenario 7: Login with invalid multiplied credentials", () => {
        let signinPage = new SignInPage();
        signinPage.login(data.scenario3.email, data.scenario3.password);
        signinPage.checkForErrorData().should("contain", "Please fill out the form to sign in.")
    });

    it("[Pseudo Random] Scenario 8: Login with invalid multiplied credentials", () => {
        let signinPage = new SignInPage();
        cy.request(`https://my.api.mockaroo.com/invalidLogin.json?key=${config.mockarooKey}`)
        .then((response) => {
            console.log(response.body);
            signinPage.login(response.body.email, response.body.password);
            signinPage.checkForErrorData().should("contain", "Please fill out the form to sign in.")
        })
    });

    it("[Random] Scenario 9: Login with invalid multiplied credentials", () => {
        let signinPage = new SignInPage();
        signinPage.login(faker.internet.email().repeat(25), faker.internet.password());
        signinPage.checkForErrorData().should("contain", "Please fill out the form to sign in.")
    });
});
