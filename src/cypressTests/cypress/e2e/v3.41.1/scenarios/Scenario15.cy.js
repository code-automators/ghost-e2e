import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";


describe("Scenario 15", () => {
    it("Insert content on website with code injection", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user goes to the code injection page
        let codeInjectionPage = homePage.goToCodeInjection();
        // And inserts a paragraph on page header
        let randomParagraph = codeInjectionPage.insertRandomParagraphOnHeader();
        // Then all pages of website should contain that header
        let mainPage = homePage.goToMainPageSite();
        mainPage.getParagraphsByText(randomParagraph).should('exist');
    });
});
