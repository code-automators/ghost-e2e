class DesignPage {
    DesignPage() {
        if (!cy.url().should("include", "/ghost/#/settings/design")) {
            throw new IllegalStateException(
                "This is not the Design Page, current page is: " + cy.url()
            );
        }
    }

    addNavigationOption(label, url) {
        cy.get("input[class$='ember-text-field gh-input ember-view']")
            .then(nodes => {
                cy.get(`input#${nodes[nodes.length - 4].id}`).invoke('val', label);
                cy.get(`input#${nodes[nodes.length - 4].id}`).type('{downarrow}');
                cy.wait(800);
                cy.get(`input#${nodes[nodes.length - 3].id}`).type(url);
                cy.wait(800);
                cy.get("button.gh-blognav-add").first().click();
                cy.contains("Save").click();
            });

        cy.wait(200);
        return new DesignPage();
    }

    getNavOptionError() {
        Cypress.on("uncaught:exception", (error, runnable) => false);
        return cy.get("article[class$='gh-alert gh-alert-red ember-view']");
    }
}

export { DesignPage };
