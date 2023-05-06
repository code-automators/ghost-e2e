class PostPage {
  PostPage() {
    if (!cy.url().should("include", "/ghost/#/posts")) {
      throw new IllegalStateException(
        "This is not Post Page current page is: " + cy.url()
      );
    }
  }

  createPost(postTitle, content, tag) {
    cy.contains("Posts").click();
    cy.contains("New post").click();
    cy.get("textarea.gh-editor-title").type(postTitle);
    cy.get("article").type(content);

    cy.get("button.post-settings").click();

    cy.get("input.ember-power-select-trigger-multiple-input")
      .first().type("tag de prueba {enter}");

    cy.get("button.close.settings-menu-header-action").click();

    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
    return cy.get(".gh-notification-content");
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
