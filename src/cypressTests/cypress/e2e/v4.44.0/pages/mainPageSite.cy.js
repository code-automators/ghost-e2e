import config from "./../assets/config.json";

class MainPageSite {
    MainPageSite() {
        if (!cy.url().should("eq", config.host)) {
            throw new IllegalStateException(
                "This is not the main blogs Page current page is: " + cy.url()
            );
        }
    }

    getNavbarMenu() {
        cy.wait(1000);
        return cy.get("ul.nav", { timeout: 4000 });
    }

    checkIfSiteIsPrivate() {
        return cy.contains("This site is private")
    }

    getParagraphsByText(text) {
        return cy.contains(text)
    }
}

export { MainPageSite };