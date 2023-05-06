import { SignInPage } from "../pages/signinPage.cy";

describe('Editar un post existente y actualizar su titulo', () => {
  const postTitle = "Nuevo título del post";

  // Caso de prueba 1: Seleccionar un post existente para editar
  it('Seleccionar un post existente para editar', () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login();
    // when user lists the posts
    let postPage = homePage.goToPost();
    postPage.selectPost();
    //Then post is selected
    postPage.selectPost().should('not.be.empty');
  });

  // Caso de prueba 2: Realizar cambios en el post
  it('Realizar cambios en el post', () => {
    let signinPage = new SignInPage();
    let homePage = signinPage.login();
    // when user lists the posts
    let postPage = homePage.goToPost();
    postPage.editPost(postTitle);
    //Then post is Updated
    postPage.editPost(postTitle).should("contain", "Updated");
  });

  // Caso de prueba 3: Validar el post editado
  it('Validar el post editado', () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login();
    // when user lists the posts
    let postPage = homePage.goToPost();
    postPage.selectPost();
    //Then post is edited
    postPage.selectPost().should('contain', postTitle);
  });
});
