import { PostPage } from "./postPage.cy";
import { PageListPage } from "./pageListPage.cy";

class HomePage {
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

  goToPageList() {
    let host = window.location.origin
    cy.visit(host + "/ghost/#/pages");
    return new PageListPage();
  }


}

export { HomePage };
