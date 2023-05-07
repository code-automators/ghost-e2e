
class SettingsPage {
    SettingsPage() {
        if (!cy.url().should("include", "/ghost/#/editor/page/")) {
            throw new IllegalStateException(
                "This is not the settings page, the current page is: " + cy.url()
            );
        }
    }

    changeSettingsAndMakePrivate(site_name) {
        cy.get("div[class$='gh-setting-first']").find("div[class$='gh-setting-action']").find("button[class$='gh-btn']").click()
        cy.get("div[class$='gh-setting-first']").find("input[class$='ember-text-field gh-input ember-view']").each(($el) => {
            cy.wrap($el).clear()
        })
        cy.get("div[class$='gh-setting-first']").find("input[class$='ember-text-field gh-input ember-view']").eq(0).type(site_name)
        cy.get("div[class$='gh-setting-first']").find("input[class$='ember-text-field gh-input ember-view']").eq(1).type('This is a test website, tested with Cypress :)')

        cy.get("div[class$='gh-setting-first']").find("div[class$='gh-setting-action']").find("button[class$='gh-btn']").click()
        cy.wait(1000)

        cy.get("div[class$='gh-setting-last']").find("div[class$='gh-setting-action']").find("button[class$='gh-btn']").contains("Expand").click()
        cy.get("div[class$='gh-setting-last']").find("input[class$='ember-text-field gh-input ember-view']").clear().type('English (United States)', { force: true })

        cy.get("span[class$='input-toggle-component']").click()
        cy.wait(500)

        cy.contains("Save settings").click()
        cy.wait(1000)
    }

    deleteBanner() {
        cy.get('button.gh-setting-action-largeimg-delete').click();
        cy.contains("Save settings").click();
    }

    verifyBanner() {
        return cy.get('div.outer.site-header-background');
    }

    uploadBanner(bannerPath) {
        cy.get("input[class$='x-file--input']").last().selectFile(bannerPath, {force: true});
        cy.wait(1000);
        cy.contains("Save settings").click();
    }

}

export { SettingsPage };
