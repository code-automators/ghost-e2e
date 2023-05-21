import { SignInPage } from "./../pages/signinPage.cy";
import data from "./../aprioriData/navOptions.json";
import config from "./../assets/config.json";


describe("Scenario05", () => {
  it("[A Priori] Add a new option to the navigation menu", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to add a new option to the navbar menu, he goes to the design page
    let designPage = homePage.goToDesignPage();
    // And the user adds an option to the navigation menu
    designPage.addNavigationOption(data.scenario10.label, data.scenario10.uri);
    // And the user goes back into the main page site
    let mainPage = homePage.goToMainPageSite();
    // Then the new navigation option should be visible in main page site
    mainPage.getNavbarMenu().should("contain", data.scenario10.label);
  });


  it("[A Priori] Add a new option to the navigation menu", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to add a new option to the navbar menu, he goes to the design page
    let designPage = homePage.goToDesignPage();
    // And the user adds an option to the navigation menu
    designPage.addNavigationOption(data.scenario16.label, data.scenario16.uri);
    // And the user goes back into the main page site
    let mainPage = homePage.goToMainPageSite();
    // Then the new navigation option should be visible in main page site
    mainPage.getNavbarMenu().should("contain", data.scenario16.label);
  });
});
