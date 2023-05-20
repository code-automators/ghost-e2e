import { SignInPage } from "./../pages/signinPage.cy";
import { HomePage } from "./../pages/homePage.cy";
import config from "./../assets/config.json";
import data from "./../aprioriData/profile.json";
import { faker } from '@faker-js/faker';

let currentTest = null;

function saveCurrentTestCredentials(scenario, newPassword) {
    currentTest.currentScenario = scenario;
    currentTest.newPassword = newPassword;
}

describe("Profile Scenarios", () => {

    before(() => {
        currentTest = {
            currentScenario: "Edit profile with valid info",
            email: config.user,
            password: config.password,
            newPassword: config.password
        }
    })

    it("[A priori] Scenario 16: Edit profile with valid info", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the slug and social media info
        let profilePage = homePage.goToProfile();
        // And the user changes their profile
        profilePage.changeSlugAndSocialMedia(
            data.scenario16.slug,
            data.scenario16.website,
            data.scenario16.facebook,
            data.scenario16.twitter
        );

        profilePage.changeCredentials(
            data.scenario16.newEmail,
            data.scenario16.newPassword,
            config.password
        )
        profilePage.getPasswordUpdated().should("exist")
        saveCurrentTestCredentials("Edit profile with valid info", data.scenario16.newPassword);
    });

    it("[Pseudo Random] Scenario 17: Edit profile with valid info", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the slug and social media info
        let profilePage = homePage.goToProfile();
        // And the user changes their profile
        cy.request(`https://my.api.mockaroo.com/validProfile.json?key=${config.mockarooKey}`)
            .then((response) => {
                profilePage.changeSlugAndSocialMedia(
                    response.body.slug,
                    response.body.website,
                    response.body.facebook,
                    response.body.twitter
                );
                profilePage.changeCredentials(
                    response.body.newEmail,
                    response.body.newPassword,
                    config.password
                )
                profilePage.getPasswordUpdated().should("exist")
                saveCurrentTestCredentials("Edit profile with valid info", response.body.newPassword);
            })
    });

    it("[Random] Scenario 18: Edit profile with valid info", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the slug and social media info
        let profilePage = homePage.goToProfile();
        // And the user changes their profile
        profilePage.changeSlugAndSocialMedia(
            faker.lorem.slug(),
            faker.internet.url(),
            faker.internet.displayName(),
            faker.internet.displayName()
        );

        let scenarioEmail = faker.internet.email();
        let scenarioPassword = faker.internet.password();
        profilePage.changeCredentials(
            scenarioEmail,
            scenarioPassword,
            config.password
        )
        profilePage.getPasswordUpdated().should("exist")
        saveCurrentTestCredentials("Edit profile with valid info", scenarioPassword);
    });

    it("[A priori] Scenario 19: Edit profile with invalid info", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the slug and social media info
        let profilePage = homePage.goToProfile();
        // And the user changes their profile
        profilePage.changeSlugAndSocialMedia(
            data.scenario19.slug,
            data.scenario19.website,
            data.scenario19.facebook,
            data.scenario19.twitter
        );

        profilePage.changeCredentials(
            data.scenario19.newEmail,
            data.scenario19.newPassword,
            config.password,
            false
        )
        profilePage.getInvalidEmail().should('exist')
        profilePage.getInvalidSocialMedia().should('exist')
        profilePage.getInvalidPassword().should('exist')
        saveCurrentTestCredentials("Edit profile with invalid info", data.scenario16.newPassword);
    });

    it("[Pseudo Random] Scenario 20: Edit profile with invalid info", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the slug and social media info
        let profilePage = homePage.goToProfile();
        // And the user changes their profile
        cy.request(`https://my.api.mockaroo.com/invalidProfile.json?key=${config.mockarooKey}`)
            .then((response) => {
                profilePage.changeSlugAndSocialMedia(
                    response.body.slug,
                    response.body.website,
                    response.body.facebook,
                    response.body.twitter
                );
                profilePage.changeCredentials(
                    response.body.newEmail,
                    response.body.newPassword,
                    config.password,
                    false
                )
                profilePage.getInvalidEmail().should('exist')
                profilePage.getInvalidSocialMedia().should('exist')
                profilePage.getInvalidPassword().should('exist')
                saveCurrentTestCredentials("Edit profile with invalid info", response.body.newPassword);
            })
    });

    it("[Random] Scenario 21: Edit profile with invalid info", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the slug and social media info
        let profilePage = homePage.goToProfile();
        // And the user changes their profile
        profilePage.changeSlugAndSocialMedia(
            faker.lorem.slug(),
            faker.lorem.paragraph(4),
            faker.string.symbol(20),
            faker.lorem.paragraph(5).concat(faker.string.symbol(5))
        );

        let scenarioEmail = faker.lorem.paragraph(2);
        let scenarioPassword = faker.internet.password({ length: 5 });
        profilePage.changeCredentials(
            scenarioEmail,
            scenarioPassword,
            config.password,
            false
        )
        profilePage.getInvalidEmail().should('exist')
        profilePage.getInvalidSocialMedia().should('exist')
        profilePage.getInvalidPassword().should('exist')
        saveCurrentTestCredentials("Edit profile with invalid info", scenarioPassword);
    });


    it("[Random] Scenario 119: Try changing passwords with different ones", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change the slug and social media info
        let profilePage = homePage.goToProfile();
        // And the user changes their profile
        let scenarioPassword = faker.internet.password();
        profilePage.changePasswordOnly(
            scenarioPassword,
            faker.internet.password(),
            config.password
        )
        profilePage.getInvalidPasswordConfirmation().should("exist")
        saveCurrentTestCredentials("Try changing passwords with different ones", scenarioPassword);
    });


    afterEach(() => {
        if (currentTest.currentScenario.includes("Edit profile with valid info")) {
            let homePage = new HomePage();
            let profilePage = homePage.goToProfile();
            profilePage.changeCredentials(config.user, config.password, currentTest.newPassword)
        }
    })
});