import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import data from "./../aprioriData/members.json";
import faker from "@faker-js/faker";

describe("Members Scenarios", () => {
    it("[A Priori] Scenario 58: Create invalid member", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let membersPage = homePage.goToMembersPage();
        //And the user add the invalid name and email 
        let newMember = membersPage.addMember(data.scenario58.name, data.scenario58.email);
        // Then the create member is displayed in the message error
        newMember.checkEmailLongError().should('contain', 'Email cannot be longer than 191 characters.');
    });

    it("[Pseudo Random] Scenario 59: Create invalid member", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let membersPage = homePage.goToMembersPage();
        cy.request(`https://my.api.mockaroo.com/invalidMembers.json?key=${config.mockarooKey}`)
            .then((response) => {
                //And the user add the invalid name and email 
                let newMember = membersPage.addMember(response.body.name, response.body.email);
                // Then the create member is displayed in the message error
                newMember.checkEmailError().should('contain', 'Invalid Email.');
            })
    });

    it("[Random] Scenario 60: Create invalid member", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let membersPage = homePage.goToMembersPage();
        //And the user add the invalid name and email 
        let newMember = membersPage.addMember(faker.name.findName(), faker.phone.phoneNumber());
        // Then the create member is displayed in the message error
        newMember.checkEmailError().should('contain', 'Invalid Email.');
    });

    it("[A Priori] Scenario 61: Create a valid member", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let membersPage = homePage.goToMembersPage();
        //And the user add the invalid name and email 
        let newMember = membersPage.addMember(data.scenario61.name, data.scenario61.email);
        // Then the create member is not displayed in the message error
        newMember.checkEmailLongError().should('not.exist');
    });

    it("[Pseudo Random] Scenario 62: Create valid member", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let membersPage = homePage.goToMembersPage();
        cy.request(`https://my.api.mockaroo.com/validMembers.json?key=${config.mockarooKey}`)
            .then((response) => {
                console.log(response.body);
                //And the user add the invalid name and email 
                let newMember = membersPage.addMember(response.body.name, response.body.email);
                // Then the create member is not displayed in the message error
                newMember.checkEmailError().should('not.exist');
            })
    });

    it("[Random] Scenario 63: Create invalid member", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let membersPage = homePage.goToMembersPage();
        //And the user add the invalid name and email 
        let newMember = membersPage.addMember(faker.name.findName(), faker.internet.email());
        // Then the create member is not displayed in the message error
        newMember.checkEmailLongError().should('not.exist');
    });
})