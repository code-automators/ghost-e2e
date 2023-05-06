import { SignInPage } from "../pages/signinPage.cy";

describe("Crear un post con tag y publicarlo", () => {
  const TITLE = "Título del nuevo post";
  const CONTENT = "Contenido del nuevo post";
  const TAG = "Tag de prueba";

  // Caso de prueba 1: Seleccionar un post existente para editar
  it("Crear un nuevo post", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login();
    // when user lists the posts
    let postPage = homePage.goToPost();
    postPage.createPost(TITLE, CONTENT, TAG);
    //Then post is selected
    postPage.selectPost().should("not.be.empty");
  });

  // // Caso de prueba 2: Realizar cambios en el post
  // it("Realizar cambios en el post", () => {
  //   let signinPage = new SignInPage();
  //   let homePage = signinPage.login();
  //   // when user lists the posts
  //   let postPage = homePage.goToPost();
  //   postPage.editPost(postTitle);
  //   //Then post is Updated
  //   postPage.editPost(postTitle).should("contain", "Updated");
  // });

  // // Caso de prueba 3: Validar el post editado
  // it("Validar el post editado", () => {
  //   // Given user is logged in
  //   let signinPage = new SignInPage();
  //   let homePage = signinPage.login();
  //   // when user lists the posts
  //   let postPage = homePage.goToPost();
  //   postPage.selectPost();
  //   //Then post is edited
  //   postPage.selectPost().should("contain", postTitle);
  // });
});
