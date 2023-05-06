import { HomePage } from "./homePage.cy";


class SignInPage {
  SignInPage() {
    if (!cy.url().should("include", "/ghost/#/signin")) {
      throw new IllegalStateException(
        "This is not Sign In Page current page is: " + cy.url()
      );
    }
  }

  login(email, password) {
    let host = "http://localhost:2368";
    cy.visit(host + "/ghost/#/signin");
    cy.wait(4000);
    cy.get('input[name="identification"]').type(email);
    cy.wait(500);
    cy.get('input[name="password"]').type(password);
    cy.wait(500);
    cy.get("#ember12").click();
    cy.wait(3000);
    return new HomePage();
  }
}

export { SignInPage };
