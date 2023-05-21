
class ProfilePage {
    ProfilePage() {
        if (!cy.url().should("include", "/ghost/#/staff")) {
            throw new IllegalStateException(
                "This is not the Profile Page current page is: " + cy.url()
            );
        }
    }

    changeSlugAndSocialMedia(slug, website, facebookProfile, twitterProfile) {
        cy.get("input#user-slug").clear().type(slug, { force: true });
        cy.wait(500);
        cy.get("input#user-website").clear().type(website, { force: true });
        cy.wait(500);
        cy.get("input#user-facebook").clear().type(facebookProfile, { force: true });
        cy.wait(500);
        cy.get("input#user-twitter").clear().type(twitterProfile, { force: true });
        cy.wait(500);
    }

    changeCredentials(newEmail, newPassword, oldPassword, save = true) {
        cy.get("input[name='email']").clear().type(newEmail, { force: true });
        if (save) {
            cy.contains("Save").click()
            cy.contains("Saved", { timeout: 20000 })
        }
        cy.get("#user-password-old").clear().type(oldPassword, { force: true });
        cy.wait(500)
        cy.get("#user-password-new").clear().type(newPassword, { force: true });
        cy.wait(500)
        cy.get("#user-new-password-verification").clear().type(newPassword, { force: true });
        cy.wait(500)
        cy.contains("Change Password").click()
        cy.wait(2000);
    }

    changePasswordOnly(newPassword, passwordConfirmation, oldPassword) {
        cy.get("#user-password-old").clear().type(oldPassword, { force: true });
        cy.wait(500)
        cy.get("#user-password-new").clear().type(newPassword, { force: true });
        cy.wait(500)
        cy.get("#user-new-password-verification").clear().type(passwordConfirmation, { force: true });
        cy.wait(500)
        cy.contains("Change Password").click()
        cy.wait(2000);
    }

    getPasswordUpdated() {
        return cy.contains("Password updated")
    }

    getInvalidEmail() {
        return cy.contains("Please supply a valid email address")
    }
    getInvalidURL() {
        return cy.contains("Website is not a valid url")
    }

    getInvalidSocialMedia() {
        return cy.contains("Your Username is not a valid Twitter Username")
    }

    getInvalidPassword() {
        return cy.contains("Password must be at least 10 characters long")
    }

    getInvalidPasswordConfirmation() {
        return cy.contains("Your new passwords do not match")
    }
}

export { ProfilePage }