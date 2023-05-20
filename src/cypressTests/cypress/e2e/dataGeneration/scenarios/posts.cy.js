import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import data from "./../aprioriData/posts.json";
import faker from "@faker-js/faker";
const { format } = require("date-fns");

describe("Posts Scenarios", () => {
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
    // And the user select random post
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
    // And the user select random post
    let postDetails = postsPage.selectRandomPost();
    // And the user edit post with time
    postDetails.editPostTime(faker.date.recent());
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
    // And the user select random post
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
    // And the user select random post
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
    // And the user select random post
    let postDetails = postsPage.selectRandomPost();
    // And the user edit post with time
    postDetails.editPostTime(format(faker.date.recent(), "HH:mm"));
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

  it("[A Priori] Scenario 87: Create valid Post", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    //when the user wants to edit a post
    let postsPage = homePage.goToPostList();
    //And the user user goes post list and click in New Post
    let newPost = postsPage.goToCreatePost();
    // And the user fills out the form and publishes the post
    let postName = faker.lorem.text();
    let publishedPost = newPost.createPost(postName, faker.lorem.paragraph());
    // And publish and send to staff members
    newPost.publishAndSend();
    homePage.goToPostList();
    // Then the edited post is displayed in the post list with the new title
    postsPage.getListPosts().should("contain", postName);
  });
});
