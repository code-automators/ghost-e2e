class PostDetails {
  PostDetails() {
    if (!cy.url().should("include", "/ghost/#/editor/post/")) {
      throw new IllegalStateException(
        "This is not th Post List Page current page is: " + cy.url()
      );
    }
  }

  editPost(postTitle) {
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

  createPost(postTitle, contentTitle) {
    cy.get('textarea.gh-editor-title').type(postTitle);
    cy.get('div.koenig-editor__editor').type(contentTitle);
    cy.get('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click();
    cy.get('button.gh-btn-blue.gh-publishmenu-button').click();
    return new PostDetails();
  }
 
  addImage(image_path) {
    cy.get("button[title$='Settings']").click();
    cy.get("input[class$='x-file--input']").selectFile(image_path, {force: true})
    cy.get("button[aria-label$='Close']").click()
    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
    return cy.get(".gh-notification-content");
  }
}

export { PostDetails };
