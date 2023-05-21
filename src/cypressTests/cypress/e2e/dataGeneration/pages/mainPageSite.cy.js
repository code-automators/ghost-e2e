import config from "./../assets/config.json";

class MainPageSite {
    MainPageSite() {
        if (!cy.url().should("eq", config.host)) {
            throw new IllegalStateException(
                "This is not the main blogs Page current page is: " + cy.url()
            );
        }
    }

    loginPrivateSite(password) {
        cy.get("input[name='password']").clear().type(password + "{enter}", { force: true })
    }

    getPageItem(itemContent) {
        return cy.contains(itemContent)
    }

    getNavbarMenu() {
        cy.wait(1000);
        return cy.get(".site-nav-content", { timeout: 4000 });
    }

    checkIfSiteIsPrivate() {
        return cy.contains("This site is private")
    }

    getParagraphsByText(text) {
        return cy.contains(text)
    }

    clickPostByTitle(title) {
        return cy.get('h2').contains(title).click();
    }
}

export { MainPageSite };