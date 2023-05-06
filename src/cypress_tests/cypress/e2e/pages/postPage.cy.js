class PostPage {
  PostPage() {
    if (!cy.url().should("include", "/ghost/#/posts")) {
      throw new IllegalStateException(
        "This is not Post Page current page is: " + cy.url()
      );
    }
  }

  selectPost() {
    cy.contains("Posts").click();
    return cy.get("a.gh-list-data.gh-post-list-title").first();
  }

  editPost(postTitle) {
    cy.contains("Posts").click();
    cy.get("a.gh-list-data.gh-post-list-title").first().click();
    cy.get("textarea.gh-editor-title").clear().type(postTitle);
    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
    return cy.get(".gh-notification-content");
  }
}

export { PostPage };
