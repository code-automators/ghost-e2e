class MainPageSite {
    MainPageSite() {
        if (!cy.url().should("eq", "http://localhost:2368/")) {
            throw new IllegalStateException(
                "This is not the main blogs Page current page is: " + cy.url()
            );
        }
    }

    checkIfSiteIsPrivate() {
        return cy.contains("This site is private")
    }

    getParagraphsByText(text) {
        return cy.contains(text)
    }
}

export { MainPageSite };