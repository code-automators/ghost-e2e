
class TagDetails {
    TagDetails() {
        if (!cy.url().should("include", "/ghost/#/tags/new")) {
            throw new IllegalStateException(
                "This is not Tags Details, the current page is: " + cy.url()
            );
        }
    }

    createNewTag(tag_name, slug, image_path) {
        cy.get("#tag-name").clear().type(tag_name, {force: true});
        cy.wait(500);
        cy.get("#tag-slug").clear().type(slug, {force: true})
        cy.wait(500);
        cy.get("#tag-description").clear().type("This is a test tag, tested with Cypress :)", {force: true});
        cy.wait(500);
        cy.get("input[name$='accent-color']").clear().type('000000', {force: true});
        cy.wait(500);
        cy.get("input[class$='x-file--input']").selectFile(image_path, {force: true})
        cy.wait(500);
        cy.contains("Save").click();
        cy.wait(5000);
    }

    uploadNewImage(image_path) {
        cy.get("button[title$='Settings']").click();
        cy.get("input[class$='x-file--input']").selectFile(image_path, {force: true})
        cy.get("button[aria-label$='Close']").click()
        cy.get("div.gh-publishmenu-trigger").click();
        cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
        return cy.get(".gh-notification-content");
    }
}

export { TagDetails };
