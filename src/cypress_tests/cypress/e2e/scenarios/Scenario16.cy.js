import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";

describe("Scenario 16", () => {

    it("Creating a new tag and assigning it to an existing post", () => {
        // Predefined tag seed
        let seed = Math.floor(Math.random() * 1000).toString();
        let uniqueTagName = config.new_tag_name + seed;
        let uniqueTagSlug = config.new_tag_slug + seed;

        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to create a new tag
        let tagsListPage = homePage.goToTagsList();
        // And the user goes to create tag and fills out the details
        let newTag = tagsListPage.goToCreateTag();
        newTag.createNewTag(uniqueTagName, uniqueTagSlug, config.image_path);
        // And once it is created, the user goes to the post list and selects a random post
        let postsPage = homePage.goToPostList();
        let postDetails = postsPage.selectRandomPost();
        // And the user adds the new tag to the post
        postDetails.addTagToPost(uniqueTagName);
        // Then the post with the new tag should be displayed in the post list
        let filteredPosts = homePage.goToPostListFilteredByTag(uniqueTagSlug);
        filteredPosts.selectPost().should('exist');
    })

})