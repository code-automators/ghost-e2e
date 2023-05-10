import { SignInPage } from "../pages/signinPage.cy";
import config from "./assets/config.json";


describe("Create a new post with a tag and publish it", () => {
  it("Scenario 1", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When user views the posts
    let postList = homePage.goToPostList();
    // When user creates, fills and saves a new post
    let newPostDetail = postList.createPost();
    newPostDetail.fillNewPost(config.new_title, config.new_content, config.new_tag_name);
    // When user goes back into the list of posts
    homePage.goToPostList();
    // Then the post was successfully created and is visible
    postList.selectPost().should("contain", config.new_title);
  });
});
