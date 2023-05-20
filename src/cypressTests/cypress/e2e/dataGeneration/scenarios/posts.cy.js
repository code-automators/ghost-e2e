import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import data from "../aprioriData/posts.json";
import { format } from 'date-fns';
import { faker } from '@faker-js/faker';

describe("Posts Scenarios", () => {
    it("[A Priori] Scenario 46: Add invalid metadata canonical URL to a post", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with canonical URL in metadata
        postDetails.editMetadataURL(data.scenario46.url);
        // Then the edited post is displayed in the post a message error
        postDetails.checkMetadataURLError().should('exist');
    });

    it("[Pseudo Random] Scenario 47: Add invalid metadata canonical URL to a post", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with canonical URL in metadata
        cy.request(`https://my.api.mockaroo.com/invalid_ur_ls.json?key=${config.mockarooKey}`)
            .then((response) => { postDetails.editMetadataURL(response.body.url); });
        // Then the edited post is displayed in the post a message error
        postDetails.checkMetadataURLError().should('exist');
    });

    it("[Random] Scenario 48: Add invalid metadata canonical URL to a post", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with canonical URL in metadata
        postDetails.editMetadataURL(faker.internet.email());
        // Then the edited post is displayed in the post a message error
        postDetails.checkMetadataURLError().should('exist');
    });

    it("[A Priori] Scenario 52: Edit a post with invalid post time", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with time
        postDetails.editPostTime(data.scenario52.time);
        // Then the edited post is displayed in the post a message error
        postDetails.checkPostTimeError().should('contain', 'Must be in format: "15:00"');
    });

    it("[Pseudo Random] Scenario 53: Edit a post with invalid post time", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with time
        cy.request(`https://my.api.mockaroo.com/invalidPosts.json?key=${config.mockarooKey}`)
            .then((response) => {
                postDetails.editPostTime(response.body.time);
                // Then the edited post is displayed in the post a message error
                postDetails.checkPostTimeError().should('contain', 'Must be in format: "15:00"');
            })
    });

    it("[Random] Scenario 54: Edit a post with invalid post time", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with time
        postDetails.editPostTime(faker.date.recent());
        // Then the edited post is displayed in the post a message error
        postDetails.checkPostTimeError().should('contain', 'Must be in format: "15:00"');
    });

    it("[A Priori] Scenario 55: Edit a post with valid post time", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with time
        postDetails.editPostTime(data.scenario55.time);
        // Then the edited post is not displayed in the post a message error
        postDetails.checkPostTimeError().should('not.exist');
    });

    it("[Pseudo Random] Scenario 56: Edit a post with valid post time", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        cy.request(`https://my.api.mockaroo.com/validPosts.json?key=${config.mockarooKey}`)
            .then((response) => {
                postDetails.editPostTime(response.body.time);
                // Then the edited post is displayed in the post a message error
                postDetails.checkPostTimeError().should('not.exist');
            })
    });

    it("[Random] Scenario 57: Edit a post with valid post time", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with time
        postDetails.editPostTime(format(faker.date.recent(), 'HH:mm'));
        // Then the edited post is not displayed in the post a message error
        postDetails.checkPostTimeError().should('not.exist');
    });
})