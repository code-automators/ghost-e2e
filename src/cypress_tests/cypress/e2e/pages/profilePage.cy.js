
class ProfilePage {
    ProfilePage() {
        if (!cy.url().should("include", "/ghost/#/staff")) {
            throw new IllegalStateException(
                "This is not the Profile Page current page is: " + cy.url()
            );
        }
    }

    changeCredentials(newEmail, newPassword, oldPassword) {
        cy.get("input[name='email']").clear().type(newEmail, {force: true});
        cy.contains("Save").click()
        cy.wait(1000);
        cy.get("#user-password-old").clear().type(oldPassword, {force: true});
        cy.wait(500)
        cy.get("#user-password-new").clear().type(newPassword, {force: true});
        cy.wait(500)
        cy.get("#user-new-password-verification").clear().type(newPassword)
        cy.wait(500)
        cy.contains("Change Password").click()
    }
}

export { ProfilePage }