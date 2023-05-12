import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";


describe("Scenario11", () => {
    it("Edit an existing tag", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("login");
        // And there is an existing tag
        let tagsListPage = homePage.goToTagsList();
        let newTag = tagsListPage.goToCreateTag();
        newTag.createNewTag(config.new_tag_name, config.new_tag_slug, config.image_path);
        tagsListPage = homePage.goToTagsList();
        tagsListPage.getTagList().should('contain', config.new_tag_name);
        takeCypressScreenshot("tagExists");
        // When user selects the existing tag to edit
        let tagDetails = tagsListPage.clickOnTag(config.new_tag_name);
        takeCypressScreenshot("selectTagToEdit");
        // And edit its name
        let newTagName = tagDetails.setRandomTagName();
        takeCypressScreenshot("changeTagName");
        // Then the existing tag should have a different name
        tagsListPage = homePage.goToTagsList();
        tagsListPage.getTagList().should('contain', newTagName);
        takeCypressScreenshot("checkTagNameChange");
    });
});
