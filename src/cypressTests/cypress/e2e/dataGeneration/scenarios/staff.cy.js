import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import data from "./../aprioriData/staff.json";
import faker from "@faker-js/faker";

describe("Members Scenarios", () => {
    it("[A Priori] Scenario 64: Staff invite people invalid", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let staffPage = homePage.goToStaffPage();
        //And the user add the invalid name and email 
        let newUser = staffPage.invitePeople(data.scenario64.email);
        // Then the create user is displayed in the message error
        staffPage.checkInvalidEmailError().should('contain', 'Invalid Email.');
    });

    it("[Pseudo Random] Scenario 65: Staff invite people invalid", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let staffPage = homePage.goToStaffPage();

        cy.request(`https://my.api.mockaroo.com/invalidStaff.json?key=${config.mockarooKey}`)
            .then((response) => {
                //And the user add the invalid name and email 
                let newUser = staffPage.invitePeople(response.body.email);
                // Then the create user is displayed in the message error
                staffPage.checkInvalidEmailError().should('contain', 'Invalid Email.');
            })
    });

    it("[Random] Scenario 66: Staff invite people invalid", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let staffPage = homePage.goToStaffPage();
        //And the user add the invalid name and email 
        let newUser = staffPage.invitePeople(faker.phone.phoneNumber());
        // Then the create user is displayed in the message error
        staffPage.checkInvalidEmailError().should('contain', 'Invalid Email.');
    });

    it("[A Priori] Scenario 67: Staff invite people valid", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let staffPage = homePage.goToStaffPage();
        //And the user add the invalid name and email 
        let newUser = staffPage.invitePeople(data.scenario67.email);
        // Then the create user is not displayed in the message error
        staffPage.checkInvalidEmailError().should('not.exist');
    });

    it("[Pseudo Random] Scenario 68: Staff invite people valid", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let staffPage = homePage.goToStaffPage();

        cy.request(`https://my.api.mockaroo.com/validStaff.json?key=${config.mockarooKey}`)
            .then((response) => {
                //And the user add the invalid name and email 
                let newUser = staffPage.invitePeople(response.body.email);
                // Then the create user is not displayed in the message error
                staffPage.checkInvalidEmailError().should('not.exist');
            })
    });

    it("[Random] Scenario 69: Staff invite people valid", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let staffPage = homePage.goToStaffPage();
        //And the user add the invalid name and email 
        let newUser = staffPage.invitePeople(faker.internet.email());
        // Then the create user is not displayed in the message error
        staffPage.checkInvalidEmailError().should('not.exist');
    });
})