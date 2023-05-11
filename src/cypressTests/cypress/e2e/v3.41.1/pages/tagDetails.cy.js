
class TagDetails {
    TagDetails() {
        if (!cy.url().should("include", "/ghost/#/tags/new")) {
            throw new IllegalStateException(
                "This is not Tags Details, the current page is: " + cy.url()
            );
        }
    }

    createNewTag(tagName, slug, imagePath, description = "This is a test tag, tested with Cypress :)") {
        cy.get("#tag-name").clear().type(tagName, { force: true });
        cy.wait(500);
        cy.get("#tag-slug").clear().type(slug, { force: true })
        cy.wait(500);
        cy.get("#tag-description").clear().type(description, { force: true });
        cy.wait(500);
        cy.get("input[name$='accent-color']").clear().type('000000', { force: true });
        cy.wait(500);
        cy.get("input[class$='x-file--input']").selectFile(imagePath, { force: true })
        cy.wait(500);
        cy.contains("Save").click();
        cy.wait(3000);
    }

    setRandomTagName() {
        let newTagName = this.generateRandomTagName(5);
        cy.get("#tag-name").clear().type(newTagName, { force: true });
        cy.wait(500);
        cy.contains("Save").click();
        cy.wait(1000);
        return newTagName;
    }

    generateRandomTagName(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return `Tag ${result}...`;
    }

    uploadNewImage(imagePath) {
        cy.get("button[title$='Settings']").click();
        cy.get("input[class$='x-file--input']").selectFile(imagePath, { force: true })
        cy.get("button[aria-label$='Close']").click()
        cy.get("div.gh-publishmenu-trigger").click();
        cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
        return cy.get(".gh-notification-content");
    }

    deleteTag() {
        cy.contains("Delete tag").click();
        cy.wait(200);
        cy.get(".gh-btn-red").eq(1).click();
    }

    verifySaveBtn() {
        return cy.get("button.gh-btn")
    }

    getCreationResponse() {
        return cy.get(".response")
    }
}

export { TagDetails };
