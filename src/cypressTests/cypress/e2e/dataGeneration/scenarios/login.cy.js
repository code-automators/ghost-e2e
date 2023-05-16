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

    it("[Pseudo Random] Scenario 1: Login with invalid credentials", () => {
        let signinPage = new SignInPage();
        cy.request(`https://my.api.mockaroo.com/login.json?key=${config.mockarooKey}`)
        .then((response) => {
            signinPage.login(response.body.email, response.body.password);
            signinPage.checkForNonExistentUser().should("contain", "There is no user with that email address.")
        })
    });

    it("[Random] Scenario 1: Login with invalid credentials", () => {
        let signinPage = new SignInPage();
        signinPage.login(faker.internet.email(), faker.internet.password());
        signinPage.checkForNonExistentUser().should("contain", "There is no user with that email address.")
    });

    it("[A Priori] Scenario 2: Login with valid email but invalid password", () => {
        let signinPage = new SignInPage();
        signinPage.login(config.user, data.scenario2.password);
        signinPage.checkForIncorrectPassword().should("contain", "Your password is incorrect.")
    });

    it("[Random] Scenario 2: Login with valid email but invalid password", () => {
        let signinPage = new SignInPage();
        signinPage.login(config.user, faker.internet.password());
        signinPage.checkForIncorrectPassword().should("contain", "Your password is incorrect.")
    });

    it("[A Priori] Scenario 3: Login with invalid multiplied credentials", () => {
        let signinPage = new SignInPage();
        signinPage.login(data.scenario3.email.repeat(25), data.scenario3.password);
        signinPage.checkForErrorData().should("contain", "Please fill out the form to sign in.")
    });

    it("[Pseudo Random] Scenario 3: Login with invalid multiplied credentials", () => {
        let signinPage = new SignInPage();
        cy.request(`https://my.api.mockaroo.com/login.json?key=${config.mockarooKey}`)
        .then((response) => {
            console.log(response.body);
            signinPage.login(response.body.email.repeat(25), response.body.password);
            signinPage.checkForErrorData().should("contain", "Please fill out the form to sign in.")
        })
    });

    it("[Random] Scenario 3: Login with invalid multiplied credentials", () => {
        let signinPage = new SignInPage();
        signinPage.login(faker.internet.email().repeat(25), faker.internet.password());
        signinPage.checkForErrorData().should("contain", "Please fill out the form to sign in.")
    });
});
