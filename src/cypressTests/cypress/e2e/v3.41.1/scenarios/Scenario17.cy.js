import { SignInPage } from "./../pages/signinPage.cy";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";
import config from "./../assets/config.json";


describe("Scenario17", () => {
  it("Change user slug and social media info.", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    takeCypressScreenshot("login");
    // When the user wants to change the slug and social media info
    let profilePage = homePage.goToProfile();
    takeCypressScreenshot("goToProfile");
    // And the user changes the slug and social media
    profilePage.changeSlugAndSocialMedia(
      config.user_profile_slug,
      config.user_profile_website,
      config.user_profile_slug,
      config.user_profile_slug
    );
    takeCypressScreenshot("changeSlugAndSocialMedia");
    // Then the user goes to author page
    const authorPage = homePage.goToAuthorPage(config.user_profile_slug);
    takeCypressScreenshot("goToAuthorPage");
    // And sees the added options
    authorPage.getAuthorOptions().contains("Website");
    authorPage.getAuthorOptions().contains("Twitter");
    authorPage.getAuthorOptions().contains("Facebook");
    takeCypressScreenshot("checkModifiedSlugAndSocialMedia");
  });
});
