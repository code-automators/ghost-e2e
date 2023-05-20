import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import data from "./../aprioriData/tags.json";
import { faker } from '@faker-js/faker';

describe("Tag Scenarios", () => {
    it("[A Priori] Scenario 10: Create a valid tag", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to create a new tag
        let tagsListPage = homePage.goToTagsList();
        // And the user goes to create tag and fills out the details
        let newTag = tagsListPage.goToCreateTag();
        newTag.createNewTag(data.scenario10.tagName, data.scenario10.tagSlug, data.scenario10.description);
        // Then the user should see the created tag
        tagsListPage = homePage.goToTagsList();
        tagsListPage.getCreatedTag(data.scenario10.tagName).should('exist');
    });

    it("[Pseudo Random] Scenario 11: Create a valid tag", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to create a new tag
        let tagsListPage = homePage.goToTagsList();
        // And the user goes to create tag and fills out the details
        let newTag = tagsListPage.goToCreateTag();
        cy.request(`https://my.api.mockaroo.com/validTags.json?key=${config.mockarooKey}`)
            .then((response) => {
                newTag.createNewTag(response.body.tagName, response.body.tagSlug, response.body.description);
                // Then the user should see the created tag
                tagsListPage = homePage.goToTagsList();
                tagsListPage.getCreatedTag(response.body.tagName).should('exist');
            })
    });

    it("[Random] Scenario 12: Create a valid tag", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to create a new tag
        let tagsListPage = homePage.goToTagsList();
        // And the user goes to create tag and fills out the details
        let newTag = tagsListPage.goToCreateTag();
        let randomTag = faker.lorem.word();
        newTag.createNewTag(randomTag, faker.lorem.slug(), faker.lorem.paragraph());
        // Then the user should see the created tag
        tagsListPage = homePage.goToTagsList();
        tagsListPage.getCreatedTag(randomTag).should('exist');
    });

    it("[A Priori] Scenario 13: Attempt to create an invalid tag", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to create a new tag
        let tagsListPage = homePage.goToTagsList();
        // And the user goes to create tag and fills out the details with invalid data
        let newTag = tagsListPage.goToCreateTag();
        newTag.createNewTag(data.scenario13.tagName, data.scenario13.tagSlug, data.scenario13.description);
        // Then the user should see the error messages
        newTag.checkTagNameError().should('contain', "Tag names cannot be longer than 191 characters.");
        newTag.checkTagDescriptionError().should('contain', "Description cannot be longer than 500 characters.");
    });

    it("[Pseudo Random] Scenario 14: Attempt to create an invalid tag", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to create a new tag
        let tagsListPage = homePage.goToTagsList();
        // And the user goes to create tag and fills out the details with invalid data
        let newTag = tagsListPage.goToCreateTag();
        cy.request(`https://my.api.mockaroo.com/invalidTags.json?key=${config.mockarooKey}`)
            .then((response) => {
                newTag.createNewTag(response.body.tagName, response.body.tagSlug, response.body.description);
                // Then the user should see the error messages
                newTag.checkTagNameError().should('contain', "Tag names cannot be longer than 191 characters.");
                newTag.checkTagDescriptionError().should('contain', "Description cannot be longer than 500 characters.");
            })
    });

    it("[Random] Scenario 15: Attempt to create an invalid tag", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to create a new tag
        let tagsListPage = homePage.goToTagsList();
        // And the user goes to create tag and fills out the details
        let newTag = tagsListPage.goToCreateTag();
        let randomTag = faker.lorem.paragraph(10);
        newTag.createNewTag(randomTag, faker.lorem.slug(), faker.lorem.paragraph(25));
        // Then the user should see the error messages
        newTag.checkTagNameError().should('contain', "Tag names cannot be longer than 191 characters.");
        newTag.checkTagDescriptionError().should('contain', "Description cannot be longer than 500 characters.");
    });

});
