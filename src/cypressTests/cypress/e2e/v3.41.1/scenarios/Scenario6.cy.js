import { SignInPage } from "../pages/signinPage.cy";
import { takeCypressScreenshot } from "./utils/takeScreenshot";
import config from "./assets/config.json";


describe("Escenario 6", () => {

    it("Crear un post y agregar una imagen", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("Scenario6", "login");
        //when the user wants to create a post 
        let postsPage = homePage.goToPostList();
        takeCypressScreenshot("Scenario6", "goToPostList");
        //And the user user goes post list and click in New Post
        let newPost = postsPage.goToCreatePost();
        takeCypressScreenshot("Scenario6", "goToCreatePost");
        // And the user fills out the form and publishes the post
        let publishedPost = newPost.createPost(config.new_title, config.new_content);
        takeCypressScreenshot("Scenario6", "createPost");
        // and add the image
        let editedPost = publishedPost.addImage(config.image_path);
        takeCypressScreenshot("Scenario6", "addImage");
        // Then the edited post should be updated
        editedPost.should("contain", "Updated");
        takeCypressScreenshot("Scenario6", "checkPostEdited");
    })
})
