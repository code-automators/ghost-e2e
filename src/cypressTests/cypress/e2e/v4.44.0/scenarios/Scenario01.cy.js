import { SignInPage } from "./../pages/signinPage.cy";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";
import config from "./../assets/config.json";


describe("Scenario01", () => {
  it("Create a new post with a tag and publish it", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    takeCypressScreenshot("login");
    // When user views the posts
    let postList = homePage.goToPostList();
    takeCypressScreenshot("goToPostList");
    // When user creates, fills and saves a new post
    let newPostDetail = postList.createPost();
    newPostDetail.fillNewPost(config.new_title, config.new_content, config.new_tag_name);
    takeCypressScreenshot("createPost");
    // When user goes back into the list of posts
    homePage.goToPostList();
    takeCypressScreenshot("goToPostList");
    // Then the post was successfully created and is visible
    postList.selectPost().should("contain", config.new_title);
    takeCypressScreenshot("checkCreatedPost");
  });
});
