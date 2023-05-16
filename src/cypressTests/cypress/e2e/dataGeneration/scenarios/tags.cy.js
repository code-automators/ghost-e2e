import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import data from "./aprioriData/tags.json";
import { faker } from '@faker-js/faker';

describe("Tag Scenarios", () => {
    it("[A Priori] Scenario 4: Create a valid tag", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to create a new tag
        let tagsListPage = homePage.goToTagsList();
        // And the user goes to create tag and fills out the details
        let newTag = tagsListPage.goToCreateTag();
        newTag.createNewTag(data.scenario4.tagName, data.scenario4.tagSlug, data.scenario4.description);
        tagsListPage = homePage.goToTagsList();
        tagsListPage.getCreatedTag(data.scenario4.tagName).should('exist');
    });

    it("[Pseudo Random] Scenario 4: Create a valid tag", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to create a new tag
        let tagsListPage = homePage.goToTagsList();
        // And the user goes to create tag and fills out the details
        let newTag = tagsListPage.goToCreateTag();
        cy.request(`https://my.api.mockaroo.com/tags.json?key=${config.mockarooKey}`)
            .then((response) => {
                newTag.createNewTag(response.body.tagName, response.body.tagSlug, response.body.description);
                tagsListPage = homePage.goToTagsList();
                tagsListPage.getCreatedTag(response.body.tagName).should('exist');
            })
    });

    it("[Random] Scenario 4: Create a valid tag", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to create a new tag
        let tagsListPage = homePage.goToTagsList();
        // And the user goes to create tag and fills out the details
        let newTag = tagsListPage.goToCreateTag();
        let randomTag = faker.lorem.word();
        newTag.createNewTag(randomTag, faker.lorem.slug(), faker.lorem.paragraph());
        tagsListPage = homePage.goToTagsList();
        tagsListPage.getCreatedTag(randomTag).should('exist');
    });

});
