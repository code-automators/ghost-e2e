
class TagDetails {
    TagDetails() {
        if (!cy.url().should("include", "/ghost/#/tags/new")) {
            throw new IllegalStateException(
                "This is not Tags Details, the current page is: " + cy.url()
            );
        }
    }

    createNewTag(tag_name, slug, image_path, description = "This is a test tag, tested with Cypress :)") {
        cy.get("#tag-name").clear().type(tag_name, { force: true });
        cy.wait(500);
        cy.get("#tag-slug").clear().type(slug, { force: true })
        cy.wait(500);
        cy.get("#tag-description").clear().type(description, { force: true });
        cy.wait(500);
        cy.get("input[name$='accent-color']").clear().type('000000', { force: true });
        cy.wait(500);
        cy.get("input[class$='x-file--input']").selectFile(image_path, { force: true })
        cy.wait(500);
        cy.contains("Save").click();
        cy.wait(2000);
    }

    setRandomTagName() {
        let new_tag_name = this.generateRandomTagName(10);
        cy.get("#tag-name").clear().type(new_tag_name, { force: true });
        cy.wait(500);
        cy.contains("Save").click();
        cy.wait(1000);
        return new_tag_name
    }

    generateRandomTagName(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return `Tag ${result}...`;
    }

    uploadNewImage(image_path) {
        cy.get("button[title$='Settings']").click();
        cy.get("input[class$='x-file--input']").selectFile(image_path, { force: true })
        cy.get("button[aria-label$='Close']").click()
        cy.get("div.gh-publishmenu-trigger").click();
        cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
        return cy.get(".gh-notification-content");
    }

    verifySaveBtn() {
        return cy.get("button.gh-btn")
    }

    getCreationResponse() {
        return cy.get(".response")
    }
}

export { TagDetails };
