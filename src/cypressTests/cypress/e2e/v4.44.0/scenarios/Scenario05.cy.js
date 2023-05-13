import { SignInPage } from "./../pages/signinPage.cy";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";
import config from "./../assets/config.json";


describe("Add a new option to the navigation menu", () => {
  it("Scenario05", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    takeCypressScreenshot("login");
    // When the user wants to add a new option to the navbar menu
    // The user goes to the navigation page
    let designPage = homePage.goToNavigationPage();
    takeCypressScreenshot("goToNavigationPage");
    // The user adds an option to the navigation menu
    designPage.addNavigationOption(config.new_navigation_bar_label, config.new_navigation_bar_uri);
    takeCypressScreenshot("addNavigationOption");
    // The user goes back into the main page site
    let mainPage = homePage.goToMainPageSite();
    takeCypressScreenshot("goToMainPageSite");
    // Then the new navigation option should be visible in main page site
    mainPage.getNavbarMenu().should("contain", config.new_navigation_bar_label);
    takeCypressScreenshot("checkNewNavigationOptionCreated");
  });
});
