import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";


describe("Crear un post y agregar una imagen", () => {

    it("Escenario 6", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to create a post 
        let postsPage = homePage.goToPostList();
        let newPost = postsPage.goToCreatePost();
        let publishedPost = newPost.createPost(config.new_title, config.new_content);
        // and add the image
        let editedPost = publishedPost.addImage(config.image_path);
        // Then the edited page should be updated
        editedPost.should("contain", "Updated");
    })
})
