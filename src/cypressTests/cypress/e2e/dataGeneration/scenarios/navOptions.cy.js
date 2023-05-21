import { SignInPage } from "../pages/signinPage.cy";
import data from "../aprioriData/navOptions.json";
import config from "../assets/config.json";


describe("Nav Option Scenarios", () => {
  it("JP![A Priori] Scenario 37: Add a new option to the navigation menu", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to add a new option to the navbar menu, he goes to the design page
    let designPage = homePage.goToDesignPage();
    // And the user adds an option to the navigation menu
    designPage.addNavigationOption(data.scenario37.label, data.scenario37.uri);
    // And the user goes back into the main page site
    let mainPage = homePage.goToMainPageSite();
    // Then the new navigation option should be visible in main page site
    mainPage.getNavbarMenu().should("contain", data.scenario37.label);
  });


  it("JP![A Priori] Scenario 40: Attempt to add an invalid option to the navigation menu", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to add a new option to the navbar menu, he goes to the design page
    let designPage = homePage.goToDesignPage();
    // And the user adds an option to the navigation menu
    
    designPage.addNavigationOption(data.scenario40.label, data.scenario40.uri);
    // And the user goes back into the main page site
    // let mainPage = homePage.goToMainPageSite();
    // Then the new navigation option should be visible in main page site
    // mainPage.getNavbarMenu().should("contain", data.scenario40.label);
    designPage.getNavOptionError().should('contain', "exceeds maximum length of 65535 characters");
  });
});
