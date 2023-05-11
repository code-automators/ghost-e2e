import { HomePage } from "./homePage.cy";
import config from "./../assets/config.json";

class SignInPage {
  SignInPage() {
    if (!cy.url().should("include", "/ghost/#/signin")) {
      throw new IllegalStateException(
        "This is not the Sign In Page, current page is: " + cy.url()
      );
    }
  }

  login(email, password) {
    let host = config.host;
    cy.visit(host + "ghost/#/signin");
    cy.wait(1000);
    cy.get('input[name="identification"]').clear({ force: true }).type(email, { force: true });
    cy.wait(500);
    cy.get('input[name="password"]').clear({ force: true }).type(password + "{enter}", { force: true });
    cy.wait(500);
    return new HomePage();
  }

  checkForErrors() {
    return cy.contains("Your password is incorrect.")
  }
}

export { SignInPage };
