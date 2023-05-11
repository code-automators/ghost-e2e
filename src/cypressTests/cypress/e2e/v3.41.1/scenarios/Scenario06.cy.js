import { SignInPage } from "./../pages/signinPage.cy";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";
import config from "./../assets/config.json";


describe("Scenario06", () => {

    it("Crear un post y agregar una imagen", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("login");
        //when the user wants to create a post
        let postsPage = homePage.goToPostList();
        takeCypressScreenshot("goToPostList");
        //And the user user goes post list and click in New Post
        let newPost = postsPage.goToCreatePost();
        takeCypressScreenshot("goToCreatePost");
        // And the user fills out the form and publishes the post
        let publishedPost = newPost.createPost(config.new_title, config.new_content);
        takeCypressScreenshot("createPost");
        // and add the image
        let editedPost = publishedPost.addImage(config.image_path);
        takeCypressScreenshot("addImage");
        // Then the edited post should be updated
        editedPost.should("contain", "Updated");
        takeCypressScreenshot("checkPostEdited");
    })
})
