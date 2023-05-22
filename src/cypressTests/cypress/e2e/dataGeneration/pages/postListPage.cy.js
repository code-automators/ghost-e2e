import { PostDetails } from "./postDetails.cy.js";

class PostPageList {
  PostPageList() {
    if (!cy.url().should("include", "/ghost/#/posts")) {
      throw new IllegalStateException(
        "This is not th Post List Page current page is: " + cy.url()
      );
    }
  }

  createPost() {
    cy.contains("Posts").click();
    cy.contains("New post").click();
    return new PostDetails();
  }

  selectPost() {
    return cy.get("h3[class$='gh-content-entry-title']").first();
  }

  selectPostByName(name) {
    cy.contains("h3[class$='gh-content-entry-title']", name)
      .click();
    return new PostDetails();
  }

  selectRandomPost() {
    cy.get("h3[class$='gh-content-entry-title']")
      .its('length')
      .then((len) => {
        cy.get("h3[class$='gh-content-entry-title']")
          .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0)
          .click()
      })
    return new PostDetails();
  }

  getListPosts() {
    return cy.get("h3[class$='gh-content-entry-title']", { timeout: 10000 });
  }

  goToCreatePost() {
    cy.contains("New post").click();
    return new PostDetails();
  }

}

export { PostPageList };
