import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import data from "./../aprioriData/posts.json";
import { faker } from "@faker-js/faker";
import { format } from 'date-fns';

describe("Posts Scenarios", () => {
    it("[A Priori] Scenario 43: Add a non existing author to a post", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with canonical URL in metadata
        postDetails.addAuthor(data.scenario43.label);
        // Then the edited post is displayed in the post a message error
        postDetails.checkAuthorError().should('exist');
    });

    it("[Pseudo Random] Scenario 44: Add a non existing author to a post", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with canonical URL in metadata
        cy.request(
            `https://my.api.mockaroo.com/invalidAuthor.json?key=${config.mockarooKey}`
        ).then((response) => {
            postDetails.addAuthor(response.body.author);
            // Then the edited post is displayed in the post a message error
            postDetails.checkAuthorError().should('exist');
        });
    });

    it("[Random] Scenario 45: Add a non existing author to a post", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with canonical URL in metadata
        postDetails.addAuthor(faker.lorem.word());
        // Then the edited post is displayed in the post a message error
        postDetails.checkAuthorError().should('exist');
    });

    it("[A Priori] Scenario 46: Add invalid canonical URL to post metadata", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user selects a random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with invalid canonical URL in metadata
        postDetails.editMetadataURL(data.scenario46.url);
        // Then there is an error message on settings
        postDetails.checkMetadataURLError().should('exist');
    });

    it("[Pseudo Random] Scenario 47: Add invalid canonical URL to post metadata", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user selects a random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with invalid canonical URL in metadata
        cy.request(`https://my.api.mockaroo.com/invalid_ur_ls.json?key=${config.mockarooKey}`)
            .then((response) => { postDetails.editMetadataURL(response.body.url); });
        // Then there is an error message on settings
        postDetails.checkMetadataURLError().should('exist');
    });

    it("[Random] Scenario 48: Add invalid canonical URL to post metadata", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user selects a random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with invalid canonical URL in metadata
        postDetails.editMetadataURL(faker.internet.email());
        // Then there is an error message on settings
        postDetails.checkMetadataURLError().should('exist');
    });

    it("[A Priori] Scenario 49: Add valid canonical URL to post metadata", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user selects a random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with canonical URL in metadata
        postDetails.editMetadataURL(data.scenario49.url);
        // Then settings are changed successfully
        postDetails.checkMetadataURLError().should('not.exist');
    });

    it("[Pseudo Random] Scenario 50: Add valid canonical URL to post metadata", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user selects a random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with canonical URL in metadata
        cy.request(`https://my.api.mockaroo.com/validURLs.json?key=${config.mockarooKey}`)
            .then((response) => { postDetails.editMetadataURL(response.body.url); });
        // Then settings are changed successfully
        postDetails.checkMetadataURLError().should('not.exist');
    });

    it("[Random] Scenario 51: Add valid canonical URL to post metadata", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user selects a random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with canonical URL in metadata
        postDetails.editMetadataURL(faker.internet.url());
        // Then settings are changed successfully
        postDetails.checkMetadataURLError().should('not.exist');
    });

    it("[A Priori] Scenario 52: Edit a post with invalid post time", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user selects a random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with time
        postDetails.editPostTime(data.scenario52.time);
        // Then the edited post is displayed in the post a message error
        postDetails
            .checkPostTimeError()
            .should("contain", 'Must be in format: "15:00"');
    });

    it("[Pseudo Random] Scenario 53: Edit a post with invalid post time", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user selects a random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with time
        cy.request(
            `https://my.api.mockaroo.com/invalidPosts.json?key=${config.mockarooKey}`
        ).then((response) => {
            postDetails.editPostTime(response.body.time);
            // Then the edited post is displayed in the post a message error
            postDetails
                .checkPostTimeError()
                .should("contain", 'Must be in format: "15:00"');
        });
    });

    it("[Random] Scenario 54: Edit a post with invalid post time", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user selects a random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with time
        postDetails.editPostTime(faker.date.month());
        // Then the edited post is displayed in the post a message error
        postDetails
            .checkPostTimeError()
            .should("contain", 'Must be in format: "15:00"');
    });

    it("[A Priori] Scenario 55: Edit a post with valid post time", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user selects a random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with time
        postDetails.editPostTime(data.scenario55.time);
        // Then the edited post is not displayed in the post a message error
        postDetails.checkPostTimeError().should("not.exist");
    });

    it("[Pseudo Random] Scenario 56: Edit a post with valid post time", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user selects a random post
        let postDetails = postsPage.selectRandomPost();
        cy.request(
            `https://my.api.mockaroo.com/validPosts.json?key=${config.mockarooKey}`
        ).then((response) => {
            postDetails.editPostTime(response.body.time);
            // Then the edited post is displayed in the post a message error
            postDetails.checkPostTimeError().should("not.exist");
        });
    });

    it("[Random] Scenario 57: Edit a post with valid post time", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user selects a random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with time
        postDetails.editPostTime(format(faker.date.recent(), 'HH:mm'));
        // Then the edited post is not displayed in the post a message error
        postDetails.checkPostTimeError().should("not.exist");
    });

    it("[A Priori] Scenario 85: Create valid Post", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        //And the user user goes post list and click in New Post
        let newPost = postsPage.goToCreatePost();
        // And the user fills out the form and publishes the post
        let postName = data.scenario85.title;
        let publishedPost = newPost.createPost(postName, data.scenario85.content);
        // And publish and send to staff members
        newPost.publishAndSend();
        homePage.goToPostList();
        // Then the edited post is displayed in the post list with the new title
        postsPage.getListPosts().should("contain", postName);
    });

    it("[Pseudo Random] Scenario 86: Create valid Post", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        //And the user user goes post list and click in New Post
        let newPost = postsPage.goToCreatePost();
        cy.request(
            `https://my.api.mockaroo.com/validPosts.json?key=${config.mockarooKey}`
        ).then((response) => {
            // And the user fills out the form and publishes the post
            let postName = response.body.title;
            let publishedPost = newPost.createPost(postName, response.body.content);
            // And publish and send to staff members
            newPost.publishAndSend();
            homePage.goToPostList();
            // Then the edited post is displayed in the post list with the new title
            postsPage.getListPosts().should("contain", postName);
        });
    });

    it("[Random] Scenario 87: Create valid Post", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user user goes post list and click in New Post
        let newPost = postsPage.goToCreatePost();
        // And the user fills out the form and publishes the post
        let postName = faker.lorem.word();
        let publishedPost = newPost.createPost(postName, faker.lorem.sentence());
        // And publish and send to staff members
        newPost.publishAndSend();
        homePage.goToPostList();
        // Then the edited post is displayed in the post list with the new title
        postsPage.getListPosts().should("contain", postName);
    });

    it("[A Priori] Scenario 88: Create post with valid metatitle", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user selects a random post
        let postDetails = postsPage.selectRandomPost();
        // And edits post with an valid metatitle
        postDetails.editMetatitle(data.scenario88.title);
        // Then there is no error message on settings
        postDetails.checkMetatitleNoError();
    });

    it("[Pseudo Random] Scenario 89: Create post with valid metatitle", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And edits post with an invalid metatitle
        cy.request(`https://my.api.mockaroo.com/validMetatitles.json?key=${config.mockarooKey}`)
            .then((response) => {
                let title = response.body.metatitle.trim();
                postDetails.editMetatitle(title);
            });
        // Then there is no error message on settings
        postDetails.checkMetatitleNoError();
    });

    it("[Random] Scenario 90: Create post with valid metatitle", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And edits post with an invalid metatitle
        postDetails.editMetatitle(faker.lorem.word());
        // Then there is an error message on settings
        postDetails.checkMetatitleNoError();
    });

    it("[A Priori] Scenario 91: Edit Post with Excerpt of more than 301 characters", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with excerpt
        postDetails.editPostExcerpt(data.scenario91.excerpt);
        // Then the edited post is displayed in the post a message error
        postDetails
            .checkPostExcerptError()
            .should("contain", 'Excerpt cannot be longer than 300 characters.');
    });

    it("[Pseudo Random] Scenario 92: Edit Post with Excerpt of more than 301 characters", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        cy.request(
            `https://my.api.mockaroo.com/invalidPosts.json?key=${config.mockarooKey}`
        ).then((response) => {
            // And the user edit post with excerpt
            postDetails.editPostExcerpt(response.body.excerpt);
            // Then the edited post is displayed in the post a message error
            postDetails
                .checkPostExcerptError()
                .should("contain", 'Excerpt cannot be longer than 300 characters.');
        });
    });

    it("[Random] Scenario 93: Edit Post with Excerpt of more than 301 characters", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with excerpt
        postDetails.editPostExcerpt(faker.lorem.paragraphs(3));
        // Then the edited post is displayed in the post a message error
        postDetails
            .checkPostExcerptError()
            .should("contain", 'Excerpt cannot be longer than 300 characters.');
    });

    it("[A Priori] Scenario 94: Add valid injected code at header from post settings", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // And a post is created
        let postList = homePage.goToPostList();
        let newPostDetails = postList.createPost();
        newPostDetails.fillNewPost("Post with injected code", config.new_content, config.new_tag_name);
        // When the user goes to the post list
        let postsPage = homePage.goToPostList();
        // And selects the created post
        let postDetails = postsPage.selectPostByName("Post with injected code");
        // And inserts a paragraph on page header using code injection
        postDetails.insertParagraphOnHeader(data.scenario94.paragraph);
        // Then post at website should contain that header
        let mainPage = homePage.goToMainPageSite();
        mainPage.clickPostByTitle("Post with injected code");
        mainPage.getParagraphsByText(data.scenario94.paragraph).should('exist');
    });

    it("[Pseudo Random] Scenario 95: Add valid injected code at header from post settings", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // And a post is created
        let postList = homePage.goToPostList();
        let newPostDetails = postList.createPost();
        newPostDetails.fillNewPost("Post with injected code", config.new_content, config.new_tag_name);
        // When the user goes to the post list
        let postsPage = homePage.goToPostList();
        // And selects the created post
        let postDetails = postsPage.selectPostByName("Post with injected code");
        // And inserts a paragraph on page header using code injection
        cy.request(`https://my.api.mockaroo.com/validParagraphs.json?key=${config.mockarooKey}`)
            .then((response) => {
                let paragraph = response.body.paragraph.trim();
                postDetails.insertParagraphOnHeader(paragraph);
                // Then post at website should contain that header
                let mainPage = homePage.goToMainPageSite();
                mainPage.clickPostByTitle("Post with injected code");
                mainPage.getParagraphsByText(paragraph).should('exist');
            });
    });

    it("[Random] Scenario 96: Add valid injected code at header from post settings", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // And a post is created
        let postList = homePage.goToPostList();
        let newPostDetails = postList.createPost();
        newPostDetails.fillNewPost("Post with injected code", config.new_content, config.new_tag_name);
        // When the user goes to the post list
        let postsPage = homePage.goToPostList();
        // And selects the created post
        let postDetails = postsPage.selectPostByName("Post with injected code");
        // And inserts a paragraph on page header using code injection
        let randomParagraph = faker.lorem.paragraph();
        postDetails.insertParagraphOnHeader(randomParagraph);
        // Then post at website should contain that header
        let mainPage = homePage.goToMainPageSite();
        mainPage.clickPostByTitle("Post with injected code");
        mainPage.getParagraphsByText(randomParagraph).should('exist');
    });

    it("[A Priori] Scenario 115: Create post with invalid metatitle", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user selects a random post
        let postDetails = postsPage.selectRandomPost();
        // And edits post with an invalid metatitle
        postDetails.editMetatitle(data.scenario115.title);
        // Then there is an error message on settings
        postDetails.checkMetatitleError();
    });

    it("[Pseudo Random] Scenario 116: Create post with invalid metatitle", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And edits post with an invalid metatitle
        cy.request(`https://my.api.mockaroo.com/invalidMetatitles.json?key=${config.mockarooKey}`)
            .then((response) => {
                let title = response.body.title.trim();
                postDetails.editMetatitle(title);
            });
        // Then there is an error message on settings
        postDetails.checkMetatitleError();
    });

    it("[Random] Scenario 117: Create post with invalid metatitle", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And edits post with an invalid metatitle
        postDetails.editMetatitle(faker.lorem.paragraph(3));
        // Then there is an error message on settings
        postDetails.checkMetatitleError();
    });
});
