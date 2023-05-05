class PostPage {
  PostPage() {
    if (!cy.url().should("include", "/ghost/#/posts")) {
      throw new IllegalStateException(
        "This is not Post Page current page is: " + cy.url()
      );
    }
  }

  editPost() {
    cy.contains("Posts").click(); // busca y hace click en el enlace "Posts"
    cy.get("a.gh-list-data.gh-post-list-title").first().click(); // selecciona el primer post y hace click en su título
    cy.get("textarea.gh-editor-title").clear().type("Nuevo título del post");
    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
    return cy.get(".gh-notification-content");
  }
}

export { PostPage };
