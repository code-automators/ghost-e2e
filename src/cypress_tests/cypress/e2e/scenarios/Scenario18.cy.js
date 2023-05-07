import { expect } from "chai";
import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";


describe("Escenario 18", () => {

    it("Eliminar un post", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user selects the post and deletes it
        let postsPage = homePage.goToPostList();
        let newPost = postsPage.goToCreatePost();
        let postName = config.new_title + (Math.random() * 10000 ).toString();
        let publishedPost = newPost.createPost(postName, config.new_content);
        homePage.goToPostList();
        publishedPost.deletePost(postName);
        homePage.goToPostList();
        // Then the post was deleted correctly
        postsPage.getListPosts().should('not.contain', postName);
    });
})
