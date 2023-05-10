import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";


describe("Scenario 7", () => {
    it("Create a post with multiple tags", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When user creates a post
        let postList = homePage.goToPostList();
        let newPostDetails = postList.createPost();
        newPostDetails.fillNewPost("Post with multiple tags", config.new_content, config.new_tag_name);
        // And user goes to the post list and selects the created post
        let postsPage = homePage.goToPostList();
        let postDetails = postsPage.selectPostByName("Post with multiple tags");
        // And the user adds multiple tags to the post
        let tags = ["tag1", "tag2", "tag3"];
        postDetails.addMultipleTagsToPost(tags);
        // Then the post should be displayed in the post list with the different tags
        let filteredPosts = homePage.goToPostListFilteredByTag(tags[0]);
        filteredPosts.selectPost().should('exist');
        filteredPosts = homePage.goToPostListFilteredByTag(tags[1]);
        filteredPosts.selectPost().should('exist');
        filteredPosts = homePage.goToPostListFilteredByTag(tags[2]);
        filteredPosts.selectPost().should('exist');
    });
});
