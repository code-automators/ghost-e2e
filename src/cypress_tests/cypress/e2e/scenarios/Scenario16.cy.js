import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";

describe("Scenario 16", () => {

    it("Creating a new tag and assigning it to an existing post", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to create a new tag
        let tagsListPage = homePage.goToTagsList();
        // And the user goes to create tag and fills out the details
        let newTag = tagsListPage.goToCreateTag();
        newTag.createNewTag(config.new_tag_name, config.new_tag_slug, config.image_path);
        // And once it is created, the user goes to the post list and selects a random post
        let postsPage = homePage.goToPostList();
        let postDetails = postsPage.selectRandomPost();
        // And the user adds the new tag to the post
        postDetails.addTagToPost(config.new_tag_name);
        // Then the post with the new tag should be displayed in the post list
        let filteredPosts = homePage.goToPostListFilteredByTag(config.new_tag_slug);
        filteredPosts.selectPost().should('exist');
    })

})