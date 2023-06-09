import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";

describe("Scenario03", () => {
    it("Create a new tag with an invalid description", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("login");
        // When the user goes to the tag list
        let tagsListPage = homePage.goToTagsList();
        takeCypressScreenshot("goToTagList");
        // And the user goes to create tag and fills out the details with a too large description
        let newTag = tagsListPage.goToCreateTag();
        newTag.createNewTag(config.new_tag_name, config.new_tag_slug, config.image_path, "a".repeat(501));
        takeCypressScreenshot("tryToCreateNewInvalidTag");
        // Then retry and error message appears. Tag is not created.
        newTag.verifySaveBtn().should("contain", "Retry");
        newTag.getCreationResponse().should("contain", "Description cannot be longer than 500 characters.");
        takeCypressScreenshot("invalidTagIsNotCreated");
    });
});
