class StaffPage {
  StaffPage() {
    if (!cy.url().should("include", "/ghost/#/staff")) {
      throw new IllegalStateException(
        "This is not the Staff Page current page is: " + cy.url()
      );
    }
  }

  invitePeople(email) {
    cy.contains("Invite people", { timeout:8000 }).click();
    cy.get("input#new-user-email").first().type(email);
    cy.contains("Send invitation now").click();
  }

  checkInvalidEmailError() {
    return cy.contains("Invalid Email.");
  }
}

export { StaffPage };
