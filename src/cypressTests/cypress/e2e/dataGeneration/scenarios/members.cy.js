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
        homePage.goToMembersPage();
        newMember.clickLeave();
        newMember.getListMembers(data.scenario58.name).should("not.exist");
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
                homePage.goToMembersPage();
                newMember.clickLeave();
                newMember.getListMembers(response.body.name).should("not.exist");
            })
    });

    it("[Random] Scenario 60: Create invalid member", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let membersPage = homePage.goToMembersPage();
        //And the user add the invalid name and email 
        let nameMember = faker.name.findName();
        let newMember = membersPage.addMember(nameMember, faker.phone.phoneNumber());
        // Then the create member is displayed in the message error
        homePage.goToMembersPage();
        newMember.clickLeave();
        newMember.getListMembers(nameMember).should("not.exist");
    });

    it("[A Priori] Scenario 61: Create a valid member", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let membersPage = homePage.goToMembersPage();
        //And the user add the invalid name and email 
        let newMember = membersPage.addMember(data.scenario61.name, data.scenario61.email);
        // Then the create member is displayed in the message error
        homePage.goToMembersPage();
        newMember.getListMembers(data.scenario61.name).should("exist");
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
                // Then the create member is displayed in the message error
                homePage.goToMembersPage();
                newMember.getListMembers(response.body.name).should("exist");
            })
    });

    it("[Random] Scenario 63: Create invalid member", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a new member
        let membersPage = homePage.goToMembersPage();
        //And the user add the invalid name and email 
        let nameMember = faker.name.findName();
        let newMember = membersPage.addMember(nameMember, faker.internet.email());
        // Then the create member is displayed in the message error
        homePage.goToMembersPage();
        newMember.getListMembers(nameMember).should("exist");
    });
})