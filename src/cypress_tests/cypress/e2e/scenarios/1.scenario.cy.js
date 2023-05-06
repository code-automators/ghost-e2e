import { SignInPage } from "../pages/signinPage.cy";

describe("Crear un post con tag y publicarlo", () => {
  const TITLE = "Título del nuevo post";
  const CONTENT = "Contenido del nuevo post";
  const TAG = "Tag de prueba";

  // Escenario 1: crear un post con tag y publicarlo
  it("Crear un post con tag y publicarlo", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login();
    // When user view the posts
    let postPage = homePage.goToPost();
    // Then create a post
    postPage.createPost(TITLE, CONTENT, TAG);
    // Then post is selected
    postPage.selectPost().should("not.be.empty");
  });
});
