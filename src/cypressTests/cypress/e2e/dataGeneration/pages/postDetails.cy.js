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

  publishAndSend() {
    cy.contains('Publish').click();
  }

  editPostExcerpt(excerpt) {
    cy.get("button[title$='Settings']").click();
    cy.get("textarea#custom-excerpt")
      .clear()
      .type(excerpt, { delay: 1 });
    cy.get("h4").click();
  }

  checkPostExcerptError() {
    return cy.contains('Excerpt cannot be longer than 300 characters.');
  }

  editMetadataURL(url) {
    cy.get("button[title$='Settings']").click();
    cy.wait(200);
    cy.scrollTo('bottom');
    cy.contains('Meta data').click();
    cy.get("input[class$='post-setting-canonicalUrl ember-text-field gh-input ember-view']").clear().type(url);
    cy.get('label').contains('Meta title').click();
  }

  editMetatitle(title) {
    cy.get("button[title$='Settings']").click();
    cy.wait(200);
    cy.scrollTo('bottom');
    cy.contains('Meta data').click();
    cy.get("#meta-title").clear().type(title);
    cy.get('label').contains('Meta title').click();
  }

  insertParagraphOnHeader(paragraph) {
    cy.get("button[title$='Settings']").click();
    cy.wait(200);
    cy.scrollTo('bottom');
    cy.contains('Code injection').click();
    cy.get('#post-setting-codeinjection-head > .CodeMirror > .CodeMirror-scroll')
      .type('{meta+a}{backspace}')
      .type(`<p>${paragraph}</p>{esc}`);
    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
  }

  checkMetatitleError() {
    cy.get('.word-count')
      .should('have.css', 'color', 'rgb(226, 84, 64)') // Red error indicator
      .should('not.have.css', 'color', 'rgb(159, 187, 88)'); // Green indicator
  }

  checkMetatitleNoError() {
    cy.get('.word-count')
      .should('not.have.css', 'color', 'rgb(226, 84, 64)') // Red error indicator
      .should('have.css', 'color', 'rgb(159, 187, 88)'); // Green indicator
  }

  checkMetadataURLError() {
    return cy.contains('Please enter a valid URL');
  }

  checkPostTimeError() {
    return cy.contains('Must be in format: "15:00"');
  }

  addAuthor(author) {
    cy.get("button[title$='Settings']").click();
    cy.wait(200);
    cy.scrollTo('bottom');
    cy.get("#author-list").type('{downarrow}' + author);
    cy.wait(800);
  }

  checkAuthorError() {
    return cy.contains('No results found');
  }
}

export { PostDetails };
