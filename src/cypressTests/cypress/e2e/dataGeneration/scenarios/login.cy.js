import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import data from "./aprioriData/login.json";
import { faker } from '@faker-js/faker';

describe("Login Scenarios", () => {
    it("Scenario 1 - A Priori", () => {
        let signinPage = new SignInPage();
        signinPage.login(data.scenario1.email, data.scenario1.password);
        signinPage.checkForNonExistentUser().should("contain", "There is no user with that email address.")
    });

    it("Scenario 1 - Pseudo Random", () => {
        let signinPage = new SignInPage();
        cy.request(`https://my.api.mockaroo.com/login.json?key=${config.mockarooKey}`)
        .then((response) => {
            console.log(response.body);
            signinPage.login(response.body.email, response.body.password);
            signinPage.checkForNonExistentUser().should("contain", "There is no user with that email address.")
        })
    });

    it("Scenario 1 - Random", () => {
        let signinPage = new SignInPage();
        signinPage.login(faker.internet.email(), faker.internet.password());
        signinPage.checkForNonExistentUser().should("contain", "There is no user with that email address.")
    });

    it("Scenario 2 - A Priori", () => {
        let signinPage = new SignInPage();
        signinPage.login(config.user, data.scenario2.password);
        signinPage.checkForIncorrectPassword().should("contain", "Your password is incorrect.")
    });

    it("Scenario 2 - Random", () => {
        let signinPage = new SignInPage();
        signinPage.login(config.user, faker.internet.password());
        signinPage.checkForIncorrectPassword().should("contain", "Your password is incorrect.")
    });

    it("Scenario 3 - A Priori", () => {
        let signinPage = new SignInPage();
        signinPage.login(data.scenario3.email.repeat(25), data.scenario3.password);
        signinPage.checkForErrorData().should("contain", "Please fill out the form to sign in.")
    });

    it("Scenario 3 - Pseudo Random", () => {
        let signinPage = new SignInPage();
        cy.request(`https://my.api.mockaroo.com/login.json?key=${config.mockarooKey}`)
        .then((response) => {
            console.log(response.body);
            signinPage.login(response.body.email.repeat(25), response.body.password);
            signinPage.checkForErrorData().should("contain", "Please fill out the form to sign in.")
        })
    });

    it("Scenario 3 - Random", () => {
        let signinPage = new SignInPage();
        signinPage.login(faker.internet.email().repeat(25), faker.internet.password());
        signinPage.checkForErrorData().should("contain", "Please fill out the form to sign in.")
    });
});
