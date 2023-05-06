import { PostDetails } from "./postDetails.cy.js";

class PostPageList {
  PostPageList() {
    if (!cy.url().should("include", "/ghost/#/posts")) {
      throw new IllegalStateException(
        "This is not th Post List Page current page is: " + cy.url()
      );
    }
  }

  selectPost() {
    return cy.get("li[class$='gh-list-row gh-posts-list-item']").first();
  }

  selectRandomPost() {
    cy.get("li[class$='gh-list-row gh-posts-list-item']")
      .its('length')
      .then((len) => {
        cy.get("li[class$='gh-list-row gh-posts-list-item']")
          .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0)
          .click()
      })
    return new PostDetails();
  }

  getListPosts(){
    return cy.get("li[class$='gh-list-row gh-posts-list-item']");
  }

}

export { PostPageList };
