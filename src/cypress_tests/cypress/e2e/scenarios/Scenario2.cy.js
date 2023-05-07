import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";


describe("Escenario 2", () => {

    it("Editar un post existente actualizando su título", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        let postDetails = postsPage.selectRandomPost();
        postDetails.editPost(config.new_title);
        homePage.goToPostList();
        // Then the edited post is displayed in the post list with the new title
        postsPage.getListPosts().should('contain', config.new_title);
    })
})
