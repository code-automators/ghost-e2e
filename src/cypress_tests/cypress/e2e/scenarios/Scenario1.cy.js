import { SignInPage } from "../pages/signinPage.cy";
import config from "./assets/config.json";


describe("Crear un post con tag y publicarlo", () => {
  const TITLE = "LA GENTE DEL PUEBLO";
  const CONTENT = "Contenido del nuevo post";
  const TAG = "Tag de prueba";

  // Escenario 1: crear un post con tag y publicarlo
  it("Scenario 1", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When user view the posts
    let postList = homePage.goToPostList();
    // Then create a post
    let newPostDetail = postList.createPost();
    // And fill and save it
    newPostDetail.fillNewPost(TITLE, CONTENT, TAG);

    homePage.goToPostList();
    // Then post was created
    postList.selectPost().should("contain", TITLE);
  });
});
