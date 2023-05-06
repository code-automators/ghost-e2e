class PostDetails {
  PostDetails() {
    if (!cy.url().should("include", "/ghost/#/editor/post/")) {
      throw new IllegalStateException(
        "This is not th Post List Page current page is: " + cy.url()
      );
    }
  }

  fillNewPost(postTitle, content, tag) {
    cy.get("textarea.gh-editor-title").type(postTitle);
    cy.get("article").type(content);

    cy.get("button.post-settings").click();

    cy.get("input.ember-power-select-trigger-multiple-input")
      .first()
      .type(`${tag}{enter}`);

    cy.get("button.close.settings-menu-header-action").click();

    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
  }

  editPost(postTitle) {
    //cy.get("a.gh-list-data.gh-post-list-title").first().click();
    cy.get("textarea.gh-editor-title").clear().type(postTitle);
    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
  }

  addTagToPost(tagName) {
    cy.get("button[title$='Settings']").click();
    cy.get("#tag-input")
      .find("input[class$='ember-power-select-trigger-multiple-input']")
      .type(tagName + "{enter}");
    cy.get("button[aria-label$='Close']").click();
    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
  }
}

export { PostDetails };
