import { HomePage } from "./homePage.cy";


class SignInPage {
  SignInPage() {
    if (!cy.url().should("include", "/ghost/#/signin")) {
      throw new IllegalStateException(
        "This is not the Sign In Page, current page is: " + cy.url()
      );
    }
  }

  login(email, password) {
    let host = "http://localhost:2368";
    cy.visit(host + "/ghost/#/signin");
    cy.wait(4000);
    cy.get('input[name="identification"]').clear().type(email);
    cy.wait(500);
    cy.get('input[name="password"]').clear().type(password);
    cy.wait(500);
    cy.get("#ember12").click();
    cy.wait(3000);
    return new HomePage();
  }

  checkForErrors(){
    return cy.contains("Your password is incorrect.")
  }
}

export { SignInPage };
