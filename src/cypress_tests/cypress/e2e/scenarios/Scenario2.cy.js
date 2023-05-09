import { SignInPage } from "../pages/signinPage.cy";
import { takeCypressScreenshot } from "./utils/takeScreenshot";
import  config  from "./assets/config.json";


describe("Escenario 2", () => {

    it("Editar un post existente actualizando su título", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("Scenario2", "login");
        //when the user wants to edit a post
        let postsPage = homePage.goToPostList();
        takeCypressScreenshot("Scenario2", "goToPostList");
        // And the user select random post
        let postDetails = postsPage.selectRandomPost();
        takeCypressScreenshot("Scenario2", "selectRandomPost");
        // And the user edit post
        postDetails.editPost(config.new_title);
        takeCypressScreenshot("Scenario2", "editPost");
        homePage.goToPostList();
        // Then the edited post is displayed in the post list with the new title
        postsPage.getListPosts().should('contain', config.new_title);
        takeCypressScreenshot("Scenario2", "checkPostEdited")
    })
})