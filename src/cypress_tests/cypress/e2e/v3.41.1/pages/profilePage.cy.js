
class ProfilePage {
    ProfilePage() {
        if (!cy.url().should("include", "/ghost/#/staff")) {
            throw new IllegalStateException(
                "This is not the Profile Page current page is: " + cy.url()
            );
        }
    }

    changeSlugAndSocialMedia(slug, website, facebookProfile, twitterProfile) {
        cy.get("input#user-slug").clear().type(slug, {force: true});
        cy.wait(500);
        cy.get("input#user-website").clear().type(website, {force: true});
        cy.wait(500);
        cy.get("input#user-facebook").clear().type(facebookProfile, {force: true});
        cy.wait(500);
        cy.get("input#user-twitter").clear().type(twitterProfile, {force: true});
        cy.contains("Save").click();
        cy.wait(1000);
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