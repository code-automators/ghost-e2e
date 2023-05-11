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
        return cy.get("li.gh-list-row", { timeout: 100000 });
    }

    clickOnTag(tagName) {
        cy.contains(tagName).click();
        return new TagDetails();
    }
}

export { TagsListPage };
