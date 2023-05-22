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
        return cy.contains(text, { timeout: 10000 });
    }

    clickPostByTitle(title) {
        return cy.get('h2').contains(title).click();
    }

    clickFacebookIcon() {
        cy.wait(6000);
        cy.get("a.social-link-fb")
            .invoke('attr', 'href')
            .then(href => { cy.visit(href); });
    }

    clickTwitterIcon() {
        cy.origin('https://twitter.com', () => {
            cy.on('uncaught:exception', (_) => {
                // We expected this error, so let's ignore it and let the test continue
                return false;
            })
        });
        cy.wait(6000);
        cy.get("a.social-link-tw")
            .invoke('attr', 'href')
            .then(href => { cy.visit(href); });
    }

    checkIsCurrentUrl(url) {
        cy.wait(6000);
        const correctedUrl = url.replace('www.', '');
        cy.url().then((currentUrl) => {
            const correctedCurrentUrl = currentUrl.replace('www.', '');
            expect(correctedCurrentUrl).to.equal(correctedUrl);
        });
    }
}

export { MainPageSite };