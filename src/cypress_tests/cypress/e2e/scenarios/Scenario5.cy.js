import { SignInPage } from "../pages/signinPage.cy";
import config from "./assets/config.json";


describe("Add a new option to the navigation menu", () => {
    it("Scenario 5", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to add a new option to the navbar menu
        // The user goes to the design page
        let designPage = homePage.goToDesignPage();
        // The user adds an option to the navigation menu
        designPage.addNavigationOption(config.new_navigation_bar_label, config.new_navigation_bar_uri);
        // The user goes back into the main page site
        homePage.goToMainPageSite();
        // Then the new navigation option should be visible in main page site
        homePage.getNavbarMenu().should("contain", config.new_navigation_bar_label);
    });
});
