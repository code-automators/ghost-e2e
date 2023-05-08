import { SignInPage } from "../pages/signinPage.cy";
import config from "./assets/config.json";


describe("Scenario 19", () => {
    it("Delete a tag", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // And there is an existing tag
        let tagsListPage = homePage.goToTagsList();
        let newTag = tagsListPage.goToCreateTag();
        let tagName = 'Tag to be deleted';
        newTag.createNewTag(tagName, config.new_tag_slug, config.image_path);
        tagsListPage = homePage.goToTagsList();
        tagsListPage.getTagList().should('contain', config.new_tag_name);
        // When the user goes to the tag list
        tagsListPage = homePage.goToTagsList();
        // And deletes an existing tag
        let tagToDelete = tagsListPage.clickOnTag(tagName);
        tagToDelete.deleteTag();
        // Then tag should not exist
        tagsListPage = homePage.goToTagsList();
        tagsListPage.getTagList().contains(tagName).should('not.exist');
    });
});
