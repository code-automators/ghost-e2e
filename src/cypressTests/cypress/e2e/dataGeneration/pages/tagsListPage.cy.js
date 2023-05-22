import { TagDetails } from "./tagDetails.cy";

class TagsListPage {
    TagsListPage() {
        if (!cy.url().should("include", "/ghost/#/tags")) {
            throw new IllegalStateException(
                "This is not the Tags List Page, current page is: " + cy.url()
            );
        }
    }

    goToCreateTag() {
        cy.contains("New tag").click();
        return new TagDetails();
    }

    getTagList() {
        return cy.get(".gh-tag-list-name", { timeout: 30000 });
    }

    clickOnTag(tagName) {
        cy.contains(tagName).click();
        return new TagDetails();
    }

    getCreatedTag(tagName) {
        return cy.contains(tagName);
    }
}

export { TagsListPage };
