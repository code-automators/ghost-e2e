class MembersPage {
  MembersPage() {
    if (!cy.url().should("include", "/ghost/#/members")) {
      throw new IllegalStateException(
        "This is not the Members Page current page is: " + cy.url()
      );
    }
  }

  addMember(name, email) {
    let host = window.location.origin;
    cy.visit(host + "/ghost/#/members/new");
    cy.wait(1000);
    cy.get("input#member-name").first().type(name);
    cy.get("input#member-email").type(email, { force: true });
    cy.wait(1000);
    cy.contains("Save").click();
    return new MembersPage();
  }

  checkEmailLongError() {
    return cy.contains("Email cannot be longer than 191 characters.", { timeout: 2000});
  }

  checkEmailError() {
    return cy.contains("Invalid Email.", { timeout: 2000});
  }

  getListMembers(name) {
    return cy.contains(name);
  }

  clickLeave() {
    cy.contains("Leave").click();
  }
}

export { MembersPage };
