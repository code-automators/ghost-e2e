import config from "./../assets/config.json";
import { SignInPage } from "./../pages/signinPage.cy";


describe("Scenario07", () => {
    it("Create a post with multiple tags", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("login");
        // When user creates a post
        let postList = homePage.goToPostList();
        let newPostDetails = postList.createPost();
        newPostDetails.fillNewPost("Post with multiple tags", config.new_content, config.new_tag_name);
        takeCypressScreenshot("createPost");
        // And user goes to the post list and selects the created post
        let postsPage = homePage.goToPostList();
        let postDetails = postsPage.selectPostByName("Post with multiple tags");
        takeCypressScreenshot("selectCreatedPost");
        // And the user adds multiple tags to the post
        let tags = Array.from({ length: 3 }, () => postDetails.generateRandomTagName(5));
        postDetails.addMultipleTagsToPost(tags);
        takeCypressScreenshot("addMultipleTagsToPost");
        // Then the post should be displayed in the post list with the different tags
        tags.forEach((tag) => { homePage.goToPostListFilteredByTag(tag).selectPost().should('exist'); });
        takeCypressScreenshot("postShownByTags");
    });
});
