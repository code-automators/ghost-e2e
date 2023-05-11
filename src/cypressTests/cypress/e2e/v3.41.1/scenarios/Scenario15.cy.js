import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";

describe("Scenario15", () => {
    it("Insert content on website with code injection", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("login");
        // When the user goes to the code injection page
        let codeInjectionPage = homePage.goToCodeInjection();
        takeCypressScreenshot("goToCodeInjection");
        // And inserts a paragraph on page header
        let randomParagraph = codeInjectionPage.insertRandomParagraphOnHeader();
        takeCypressScreenshot("insertParagraphOnHeader");
        // Then all pages of website should contain that header
        let mainPage = homePage.goToMainPageSite();
        mainPage.getParagraphsByText(randomParagraph).should('exist');
        takeCypressScreenshot("websiteContainsHeaderInjections");
    });
});
