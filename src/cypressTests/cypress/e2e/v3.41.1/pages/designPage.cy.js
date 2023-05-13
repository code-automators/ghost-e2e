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
                cy.get(`input#${nodes[nodes.length - 4].id}`).type(label);
                cy.wait(1000);
                cy.get(`input#${nodes[nodes.length - 3].id}`).type(url);
                cy.wait(1000);
                cy.get("button.gh-blognav-add").first().click();
                cy.contains("Save").click();
            });
        
        cy.wait(3000);
        return new DesignPage();
    }
}

export { DesignPage };
