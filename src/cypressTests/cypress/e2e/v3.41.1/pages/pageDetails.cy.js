import { PageListPage } from "./pageListPage.cy";

class PageDetails {
    PageDetails() {
        if (!cy.url().should("include", "/ghost/#/editor/page/")) {
            throw new IllegalStateException(
                "This is not Page Details, the current page is: " + cy.url()
            );
        }
    }

    createNewImagedPage(page_name, image_path) {
        cy.get("textarea[placeholder$='Page Title']").clear().type(page_name);
        cy.get("div[data-placeholder$='Begin writing your page...']").clear()
        .type("This is a test page, tested with Cypress :)");

        cy.get("button[title$='Settings']").click();
        cy.get("input[class$='x-file--input']").selectFile(image_path, {force: true})
        cy.get("button[aria-label$='Close']").click()

        cy.get("div.gh-publishmenu-trigger").click();
        cy.get("button.gh-btn-blue.gh-publishmenu-button").click();

        let host = window.location.origin
        cy.visit(host + "/ghost/#/pages?type=published")
        return new PageListPage();
    }

    createNewPage(page_name) {
        cy.get("textarea[placeholder$='Page Title']").clear().type(page_name);
        cy.get("div[data-placeholder$='Begin writing your page...']").clear().type("This is a test page, tested with Cypress :)")
        cy.get("div.gh-publishmenu-trigger").click();
        cy.get("button.gh-btn-blue.gh-publishmenu-button").click();

        let host = window.location.origin
        cy.visit(host + "/ghost/#/pages?type=published")
        return new PageListPage();
    }

    uploadNewImage(image_path) {
        cy.get("button[title$='Settings']").click();
        cy.get('body').then((body) => {
            if(body.find("input[class$='x-file--input']").length > 0) {
                cy.get("a[class='image-cancel']").click()
                cy.wait(500);
            }
            cy.get("input[class$='x-file--input']").selectFile(image_path, {force: true});
        })
        cy.get("button[aria-label$='Close']").click()
        cy.get("div.gh-publishmenu-trigger").click();
        cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
        return cy.get(".gh-notification-content");
    }
}

export { PageDetails };
