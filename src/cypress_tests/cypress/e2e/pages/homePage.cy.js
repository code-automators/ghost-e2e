import { PostPage } from "./postPage.cy";
import { PageListPage } from "./pageListPage.cy";
import { ProfilePage } from "./profilePage.cy";
import { SignInPage } from "./signinPage.cy"

class HomePage {
  HomePage() {
    if (!cy.url().should("include", "/ghost/#/site")) {
      throw new IllegalStateException(
        "This is not Home Page current page is: " + cy.url()
      );
    }
  }

  getUrl() {
    return cy.url()
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

  goToProfile() {
    cy.wait(500)
    cy.contains("Staff").click()
    cy.contains("Owner").click()
    return new ProfilePage();
  }

  logout() {
    let host = window.location.origin
    cy.visit(host + "/ghost/#/signout")
    return new SignInPage();
  }
}

export { HomePage };
