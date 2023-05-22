
class SettingsPage {
    SettingsPage() {
        if (!cy.url().should("include", "/ghost/#/editor/page/")) {
            throw new IllegalStateException(
                "This is not the settings page, the current page is: " + cy.url()
            );
        }
    }

    addMetatitle(metatitle) {
        cy.get("div[class$='gh-setting-first flex-column']").find("div[class$='flex flex-row justify-between w-100']").find("div[class$='gh-setting-action']").find("button[class$='gh-btn']").click();
        cy.get("input#metaTitle").clear().type(metatitle, { force: true, delay: 1 });
    }

    getMetatileWordCounter() {
        return cy.get("span[class$='word-count']").first();
    }

    changeSettings(site_name, site_description, site_language, save = true) {
        cy.get("div[class$='gh-setting-first']").find("div[class$='gh-setting-action']").find("button[class$='gh-btn']").click()
        cy.get("div[class$='gh-setting-first']").find("input[class$='ember-text-field gh-input ember-view']").each(($el) => {
            cy.wrap($el).clear()
        })
        cy.get("div[class$='gh-setting-first']").find("input[class$='ember-text-field gh-input ember-view']").eq(0).type(site_name)
        cy.get("div[class$='gh-setting-first']").find("input[class$='ember-text-field gh-input ember-view']").eq(1).type(site_description)

        if (save) {
            cy.get("div[class$='gh-setting-first']").find("div[class$='gh-setting-action']").find("button[class$='gh-btn']").click()
        }
        cy.wait(1000)

        cy.get("div[class$='gh-setting-last']").find("div[class$='gh-setting-action']").find("button[class$='gh-btn']").contains("Expand").click()
        cy.get("div[class$='gh-setting-last']").find("input[class$='ember-text-field gh-input ember-view']").clear({ force: true }).type(site_language, { force: true })
        cy.wait(500)

        if (save) {
            cy.contains("Save settings").click()
            cy.wait(1000)
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

    togglePrivate() {
        cy.get("span[class$='input-toggle-component']").click()
        cy.wait(500)

        cy.contains("Save settings").click()
        cy.wait(1000)
    }

    togglePrivateAndChangePassword(password) {
        cy.get("span[class$='input-toggle-component']").click()
        cy.wait(500)
        cy.get("input[name$='general[password]']").clear().type(password, { force: true })
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
        cy.get("input[class$='x-file--input']").last().selectFile(bannerPath, { force: true });
        cy.wait(1000);
        cy.contains("Save settings").click();
    }

    getTitleError() {
        return cy.contains("Title is too long")
    }

    getDescriptionError() {
        return cy.contains("Description is too long")
    }

    addMetaData(metaTitle, metaDescription) {
        cy.get("div[class$='gh-setting-first flex-column']").find("div[class$='flex flex-row justify-between w-100']").find("div[class$='gh-setting-action']").find("button[class$='gh-btn']").click();
        cy.get("input#metaTitle").clear().type(metaTitle, { force: true });
        cy.get("textarea#metaDescription").clear().type(metaDescription, { force: true });
        cy.wait(1000);
        cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon").click();
    }

    changeFacebookLink(url) {
        cy.get(':nth-child(8) > .gh-setting-first > .gh-setting-action > .gh-btn').click();
        cy.get("input[class$='ember-text-field gh-input ember-view']").first().clear().type(url, { force: true });
        cy.wait(1000);
        cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon").click();
        cy.contains('Saved');
    }

    changeTwitterLink(url) {
        cy.get(':nth-child(8) > .gh-setting-first > .gh-setting-action > .gh-btn').click();
        cy.get("input[class$='ember-text-field gh-input ember-view']").eq(1).clear().type(url, { force: true });
        cy.wait(1000);
        cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon").click();
        cy.contains('Saved');
    }

    checkFacebookUrlError() {
        return cy.get('p.response').contains('The URL must be in a format like https://www.facebook.com/yourPage');
    }

    checkTwitterUrlError() {
        return cy.get('p.response').contains('Your Username is not a valid Twitter Username');
    }

    checkMetadataValidation() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        return cy.get('div.gh-alert-content', { timeout: 8000 });
    }
}

export { SettingsPage };
