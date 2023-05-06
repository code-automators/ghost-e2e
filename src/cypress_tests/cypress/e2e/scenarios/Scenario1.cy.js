import { SignInPage } from "../pages/signinPage.cy";
import config from "./assets/config.json";


describe("Create a new post with a tag and publish it", () => {
  it("Scenario 1", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When user view the posts
    let postList = homePage.goToPostList();
    // Then create, fill and save a post
    let newPostDetail = postList.createPost();
    newPostDetail.fillNewPost(config.new_title, config.new_content, config.new_tag_name);
    homePage.goToPostList();
    // Then post was created
    postList.selectPost().should("contain", TITLE);
  });
});
