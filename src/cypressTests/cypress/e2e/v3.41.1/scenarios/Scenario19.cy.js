import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";

describe("Scenario19", () => {
    it("Delete a tag", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("login");
        // And there is an existing tag
        let tagsListPage = homePage.goToTagsList();
        let newTag = tagsListPage.goToCreateTag();
        let tagName = 'Tag to be deleted';
        newTag.createNewTag(tagName, config.new_tag_slug, config.image_path);
        tagsListPage = homePage.goToTagsList();
        tagsListPage.getTagList().should('contain', tagName);
        takeCypressScreenshot("tagExists");
        // When the user goes to the tag list
        tagsListPage = homePage.goToTagsList();
        takeCypressScreenshot("goToTagsList");
        // And deletes an existing tag
        let tagToDelete = tagsListPage.clickOnTag(tagName);
        tagToDelete.deleteTag();
        takeCypressScreenshot("deleteTag");
        // Then tag should not exist
        tagsListPage = homePage.goToTagsList();
        tagsListPage.getTagList().contains(tagName).should('not.exist');
        takeCypressScreenshot("checkTagDeletion");
    });
});
