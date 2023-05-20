class PostDetails {
  PostDetails() {
    if (!cy.url().should("include", "/ghost/#/editor/post/")) {
      throw new IllegalStateException(
        "This is not th Post List Page current page is: " + cy.url()
      );
    }
  }

  fillNewPost(postTitle, content, additionalProps = {}) {
    const { tag, scheduleDate, scheduleHour } = additionalProps;

    cy.get("textarea.gh-editor-title").type(postTitle);
    cy.get("article").type(content);

    if (tag) {
      cy.get("button.post-settings").click();

      cy.get("input.ember-power-select-trigger-multiple-input")
        .first()
        .type(`${tag}{enter}`);

      cy.get("button.close.settings-menu-header-action").click();
    }

    cy.get("div.gh-publishmenu-trigger").click();

    if (scheduleDate && scheduleHour) {
      cy.get("div.gh-publishmenu-radio-button").last().click();
      cy.get("div[class$='gh-date-time-picker-date '")
        .find("input")
        .first()
        .clear()
        .type(scheduleDate, { force: true });
      cy.wait(1000);
      cy.get("div[class$='gh-date-time-picker-time '")
        .find("input")
        .first()
        .clear()
        .type(scheduleHour, { force: true });
      cy.wait(1000);
    }

    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
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
      .type(tagName + "{enter}", { force: true });
    cy.get("button[aria-label$='Close']").click();
    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
  }

  addMultipleTagsToPost(tags) {
    for (let tag of tags) {
      this.addTagToPost(tag);
    }
  }

  createPost(postTitle, contentTitle) {
    cy.get("textarea.gh-editor-title").type(postTitle);
    cy.get("div.koenig-editor__editor").type(contentTitle);
    cy.get(
      "div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger"
    ).click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
    return new PostDetails();
  }

  addImage(image_path) {
    cy.get("button[title$='Settings']").click();
    cy.get("input[class$='x-file--input']").selectFile(image_path, {
      force: true,
    });
    cy.get("button[aria-label$='Close']").click();
    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
    return cy.get(".gh-notification-content");
  }

  deletePost(postTitle) {
    cy.get("h3.gh-content-entry-title").contains(postTitle).click();
    cy.get("button[title$='Settings']").click();
    cy.get("button.settings-menu-delete-button").click();
    cy.get("button.gh-btn-red").first().click();
  }

  generateRandomTagName(length) {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return `tag-${result}`;
  }

  editPostTime(time) {
    cy.get("button[title$='Settings']").click();
    cy.get("div.gh-date-time-picker-time > input[type=text]")
      .clear()
      .type(time);
    cy.get("h4").click();
  }

  checkPostTimeError() {
    return cy.contains('Must be in format: "15:00"');
  }

  publishAndSend(){
    cy.contains('Publish and send').click();
  }
}

export { PostDetails };
