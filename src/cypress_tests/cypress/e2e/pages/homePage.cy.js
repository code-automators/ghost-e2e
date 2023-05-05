import { PostPage } from "./postPage.cy";

class HomePage {

  cons

  HomePage() {
    if (!cy.url().should("include", "/ghost/#/site")) {
      throw new IllegalStateException(
        "This is not Home Page current page is: " + cy.url()
      );
    }
  }

  goToPost() {
    let host = window.location.origin;
    cy.visit(host + "/ghost/#/posts");

    return new PostPage();
  }
}

export { HomePage };
