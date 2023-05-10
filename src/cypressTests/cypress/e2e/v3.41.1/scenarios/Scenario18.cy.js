import { SignInPage } from "./../pages/signinPage.cy";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";
import config from "./../assets/config.json";


describe("Scenario18", () => {

    it("Eliminar un post", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("Scenario18", "login");
        // When the user selects the post and deletes it
        let postsPage = homePage.goToPostList();
        takeCypressScreenshot("Scenario18", "goToPostList");
        //And the user user goes post list and click in New Post
        let newPost = postsPage.goToCreatePost();
        takeCypressScreenshot("Scenario18", "goToCreatePost");
        // And the user fills out the form and publishes the post
        let postName = config.new_title + (Math.random() * 10000).toString();
        let publishedPost = newPost.createPost(postName, config.new_content);
        takeCypressScreenshot("Scenario18", "createPost");
        homePage.goToPostList();
        // And user deletes a post
        publishedPost.deletePost(postName);
        takeCypressScreenshot("Scenario18", "deletePost");
        homePage.goToPostList();
        // Then the post was deleted correctly
        postsPage.getListPosts().should('not.contain', postName);
        takeCypressScreenshot("Scenario18", "checkDeletePost");
    });
})
