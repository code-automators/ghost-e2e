class IntegrationListPage {
    IntegrationListPage() {
        if (!cy.url().should("include", "/ghost/#/settings/integrations")) {
            throw new IllegalStateException(
                "This is not the Integration List Page, current page is: " + cy.url()
            );
        }
    }

    addIntegration(name, description) {
        let host = window.location.origin;
        cy.visit(host + "/ghost/#/settings/integrations/new");
        cy.get('input#new-integration-name').first().type(name);
        cy.get('button.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click();
        cy.get('input#integration_description').type(description);
        cy.contains('Save').click();
        return new IntegrationListPage();
    }

    getListIntegrations() {
        return cy.get('div.apps-grid-cell');
    }
}

export { IntegrationListPage };
