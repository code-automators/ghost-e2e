import { SignInPage } from "../pages/signinPage.cy";

describe("Editar un post existente y actualizarlo", () => {
  it("Caso de prueba 1: Seleccionar un post existente para editar", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login();
    // When user edit a post
    let postPage = homePage.goToPost();
    postPage.editPost();
    // Then post is updated
    postPage.editPost().should("contain", "Updated");
  });
});
