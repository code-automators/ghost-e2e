import { PageDetails } from "./pageDetails.cy";

class PageListPage {
    PageListPage() {
        if (!cy.url().should("include", "/ghost/#/pages")) {
            throw new IllegalStateException(
                "This is not Post Page current page is: " + cy.url()
            );
        }
    }

    goToCreatePage() {
        cy.contains("New page").click();
        return new PageDetails();
    }

    selectRandomPage() {
        cy.get("li[class$='gh-list-row gh-posts-list-item']")
            .its('length')
            .then((len) => {
                cy.get("li[class$='gh-list-row gh-posts-list-item']")
                    .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0)
                    .click()
            })
        return new PageDetails();
    }

    getList() {
        return cy.get("h3[class$='gh-content-entry-title']")
    }
}

export { PageListPage };
