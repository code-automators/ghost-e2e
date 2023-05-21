import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import data from "./../aprioriData/posts.json";
import data2 from "./../aprioriData/navOptions.json";
import { faker } from "@faker-js/faker";
import { format } from 'date-fns';

describe("Posts Scenarios", () => {
    it("JP![A Priori] Scenario 43: Add a non existing author to a post", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a post
        let postsPage = homePage.goToPostList();
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        // And the user edit post with canonical URL in metadata
        postDetails.addAuthor(data2.scenario37.label);
        // Then the edited post is displayed in the post a message error
        postDetails.checkAuthorError().should('exist');
    });

  //   it("[A Priori] Scenario 46: Add invalid metadata canonical URL to a post", () => {
  //       // Given user is logged in
  //       let signinPage = new SignInPage();
  //       let homePage = signinPage.login(config.user, config.password);
  //       // When the user wants to edit a post
  //       let postsPage = homePage.goToPostList();
  //       // And the user select random post
  //       let postDetails = postsPage.selectRandomPost();
  //       // And the user edit post with canonical URL in metadata
  //       postDetails.editMetadataURL(data.scenario46.url);
  //       // Then the edited post is displayed in the post a message error
  //       postDetails.checkMetadataURLError().should('exist');
  //   });

  //   it("[Pseudo Random] Scenario 47: Add invalid metadata canonical URL to a post", () => {
  //       // Given user is logged in
  //       let signinPage = new SignInPage();
  //       let homePage = signinPage.login(config.user, config.password);
  //       // When the user wants to edit a post
  //       let postsPage = homePage.goToPostList();
  //       // And the user select random post
  //       let postDetails = postsPage.selectRandomPost();
  //       // And the user edit post with canonical URL in metadata
  //       cy.request(`https://my.api.mockaroo.com/invalid_ur_ls.json?key=${config.mockarooKey}`)
  //           .then((response) => { postDetails.editMetadataURL(response.body.url); });
  //       // Then the edited post is displayed in the post a message error
  //       postDetails.checkMetadataURLError().should('exist');
  //   });

  //   it("[Random] Scenario 48: Add invalid metadata canonical URL to a post", () => {
  //       // Given user is logged in
  //       let signinPage = new SignInPage();
  //       let homePage = signinPage.login(config.user, config.password);
  //       // When the user wants to edit a post
  //       let postsPage = homePage.goToPostList();
  //       // And the user select random post
  //       let postDetails = postsPage.selectRandomPost();
  //       // And the user edit post with canonical URL in metadata
  //       postDetails.editMetadataURL(faker.internet.email());
  //       // Then the edited post is displayed in the post a message error
  //       postDetails.checkMetadataURLError().should('exist');
  //   });

  //   it("[A Priori] Scenario 52: Edit a post with invalid post time", () => {
  //     // Given user is logged in
  //     let signinPage = new SignInPage();
  //     let homePage = signinPage.login(config.user, config.password);
  //     //when the user wants to edit a post
  //     let postsPage = homePage.goToPostList();
  //     // And the user select random post
  //     let postDetails = postsPage.selectRandomPost();
  //     // And the user edit post with time
  //     postDetails.editPostTime(data.scenario52.time);
  //     // Then the edited post is displayed in the post a message error
  //     postDetails
  //       .checkPostTimeError()
  //       .should("contain", 'Must be in format: "15:00"');
  //   });

  // it("[Pseudo Random] Scenario 53: Edit a post with invalid post time", () => {
  //   // Given user is logged in
  //   let signinPage = new SignInPage();
  //   let homePage = signinPage.login(config.user, config.password);
  //   //when the user wants to edit a post
  //   let postsPage = homePage.goToPostList();
  //   // And the user select random post
  //   let postDetails = postsPage.selectRandomPost();
  //   // And the user edit post with time
  //   cy.request(
  //     `https://my.api.mockaroo.com/invalidPosts.json?key=${config.mockarooKey}`
  //   ).then((response) => {
  //     postDetails.editPostTime(response.body.time);
  //     // Then the edited post is displayed in the post a message error
  //     postDetails
  //       .checkPostTimeError()
  //       .should("contain", 'Must be in format: "15:00"');
  //   });
  // });

  // it("[Random] Scenario 54: Edit a post with invalid post time", () => {
  //   // Given user is logged in
  //   let signinPage = new SignInPage();
  //   let homePage = signinPage.login(config.user, config.password);
  //   //when the user wants to edit a post
  //   let postsPage = homePage.goToPostList();
  //   // And the user select random post
  //   let postDetails = postsPage.selectRandomPost();
  //   // And the user edit post with time
  //   postDetails.editPostTime(faker.date.month());
  //   // Then the edited post is displayed in the post a message error
  //   postDetails
  //     .checkPostTimeError()
  //     .should("contain", 'Must be in format: "15:00"');
  // });

  // it("[A Priori] Scenario 55: Edit a post with valid post time", () => {
  //   // Given user is logged in
  //   let signinPage = new SignInPage();
  //   let homePage = signinPage.login(config.user, config.password);
  //   //when the user wants to edit a post
  //   let postsPage = homePage.goToPostList();
  //   // And the user select random post
  //   let postDetails = postsPage.selectRandomPost();
  //   // And the user edit post with time
  //   postDetails.editPostTime(data.scenario55.time);
  //   // Then the edited post is not displayed in the post a message error
  //   postDetails.checkPostTimeError().should("not.exist");
  // });

  // it("[Pseudo Random] Scenario 56: Edit a post with valid post time", () => {
  //   // Given user is logged in
  //   let signinPage = new SignInPage();
  //   let homePage = signinPage.login(config.user, config.password);
  //   //when the user wants to edit a post
  //   let postsPage = homePage.goToPostList();
  //   // And the user select random post
  //   let postDetails = postsPage.selectRandomPost();
  //   cy.request(
  //     `https://my.api.mockaroo.com/validPosts.json?key=${config.mockarooKey}`
  //   ).then((response) => {
  //     postDetails.editPostTime(response.body.time);
  //     // Then the edited post is displayed in the post a message error
  //     postDetails.checkPostTimeError().should("not.exist");
  //   });
  // });

  // it("[Random] Scenario 57: Edit a post with valid post time", () => {
  //   // Given user is logged in
  //   let signinPage = new SignInPage();
  //   let homePage = signinPage.login(config.user, config.password);
  //   //when the user wants to edit a post
  //   let postsPage = homePage.goToPostList();
  //   // And the user select random post
  //   let postDetails = postsPage.selectRandomPost();
  //   // And the user edit post with time
  //   postDetails.editPostTime(format(faker.date.recent(), 'HH:mm'));
  //   // Then the edited post is not displayed in the post a message error
  //   postDetails.checkPostTimeError().should("not.exist");
  // });

  // it("[A Priori] Scenario 85: Create valid Post", () => {
  //   // Given user is logged in
  //   let signinPage = new SignInPage();
  //   let homePage = signinPage.login(config.user, config.password);
  //   //when the user wants to edit a post
  //   let postsPage = homePage.goToPostList();
  //   //And the user user goes post list and click in New Post
  //   let newPost = postsPage.goToCreatePost();
  //   // And the user fills out the form and publishes the post
  //   let postName = data.scenario85.title;
  //   let publishedPost = newPost.createPost(postName, data.scenario85.content);
  //   // And publish and send to staff members
  //   newPost.publishAndSend();
  //   homePage.goToPostList();
  //   // Then the edited post is displayed in the post list with the new title
  //   postsPage.getListPosts().should("contain", postName);
  // });

  // it("[Pseudo Random] Scenario 86: Create valid Post", () => {
  //   // Given user is logged in
  //   let signinPage = new SignInPage();
  //   let homePage = signinPage.login(config.user, config.password);
  //   //when the user wants to edit a post
  //   let postsPage = homePage.goToPostList();
  //   //And the user user goes post list and click in New Post
  //   let newPost = postsPage.goToCreatePost();
  //   cy.request(
  //     `https://my.api.mockaroo.com/validPosts.json?key=${config.mockarooKey}`
  //   ).then((response) => {
  //     // And the user fills out the form and publishes the post
  //     let postName = response.body.title;
  //     let publishedPost = newPost.createPost(postName, response.body.content);
  //     // And publish and send to staff members
  //     newPost.publishAndSend();
  //     homePage.goToPostList();
  //     // Then the edited post is displayed in the post list with the new title
  //     postsPage.getListPosts().should("contain", postName);
  //   });
  // });

  // it("[Random] Scenario 87: Create valid Post", () => {
  //   // Given user is logged in
  //   let signinPage = new SignInPage();
  //   let homePage = signinPage.login(config.user, config.password);
  //   //when the user wants to edit a post
  //   let postsPage = homePage.goToPostList();
  //   //And the user user goes post list and click in New Post
  //   let newPost = postsPage.goToCreatePost();
  //   // And the user fills out the form and publishes the post
  //   let postName = faker.lorem.text();
  //   let publishedPost = newPost.createPost(postName, faker.lorem.paragraph());
  //   // And publish and send to staff members
  //   newPost.publishAndSend();
  //   homePage.goToPostList();
  //   // Then the edited post is displayed in the post list with the new title
  //   postsPage.getListPosts().should("contain", postName);
  // });

  // it("[A Priori] Scenario 91: Edit Post with Excerpt of more than 301 characters", () => {
  //   // Given user is logged in
  //   let signinPage = new SignInPage();
  //   let homePage = signinPage.login(config.user, config.password);
  //   //when the user wants to edit a post
  //   let postsPage = homePage.goToPostList();
  //   // And the user select random post
  //   let postDetails = postsPage.selectRandomPost();
  //   // And the user edit post with excerpt
  //   postDetails.editPostExcerpt(data.scenario91.excerpt);
  //   // Then the edited post is displayed in the post a message error
  //   postDetails
  //     .checkPostExcerptError()
  //     .should("contain", 'Excerpt cannot be longer than 300 characters.');
  // });

  // it("[Pseudo Random] Scenario 92: Edit Post with Excerpt of more than 301 characters", () => {
  //   // Given user is logged in
  //   let signinPage = new SignInPage();
  //   let homePage = signinPage.login(config.user, config.password);
  //   //when the user wants to edit a post
  //   let postsPage = homePage.goToPostList();
  //   // And the user select random post
  //   let postDetails = postsPage.selectRandomPost();
  //   cy.request(
  //     `https://my.api.mockaroo.com/invalidPosts.json?key=${config.mockarooKey}`
  //   ).then((response) => {
  //     // And the user edit post with excerpt
  //     postDetails.editPostExcerpt(response.body.excerpt);
  //     // Then the edited post is displayed in the post a message error
  //     postDetails
  //       .checkPostExcerptError()
  //       .should("contain", 'Excerpt cannot be longer than 300 characters.');
  //   });
  // });
  // it("[Random] Scenario 93: Edit Post with Excerpt of more than 301 characters", () => {
  //   // Given user is logged in
  //   let signinPage = new SignInPage();
  //   let homePage = signinPage.login(config.user, config.password);
  //   //when the user wants to edit a post
  //   let postsPage = homePage.goToPostList();
  //   // And the user select random post
  //   let postDetails = postsPage.selectRandomPost();
  //   // And the user edit post with excerpt
  //   postDetails.editPostExcerpt(faker.lorem.paragraphs(2));
  //   // Then the edited post is displayed in the post a message error
  //   postDetails
  //     .checkPostExcerptError()
  //     .should("contain", 'Excerpt cannot be longer than 300 characters.');
  // });
});
