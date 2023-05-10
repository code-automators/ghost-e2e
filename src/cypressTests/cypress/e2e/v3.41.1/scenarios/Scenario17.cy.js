import { SignInPage } from "./../pages/signinPage.cy";
import config from "./assets/config.json";

describe("Change user slug and social media info.", () => {

    it("Scenario 17", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to change their password
        let profilePage = homePage.goToProfile();
        // When user changes their password
        profilePage.changeSlugAndSocialMedia(
            config.user_profile_slug,
            config.user_profile_website,
            config.user_profile_slug,
            config.user_profile_slug
        );
        // Then the user goes to author page
        const authorPage = homePage.goToAuthorPage(config.user_profile_slug);
        // And sees the added options
        authorPage.getAuthorOptions().contains("Website");
        authorPage.getAuthorOptions().contains("Twitter");
        authorPage.getAuthorOptions().contains("Facebook");
    })

})