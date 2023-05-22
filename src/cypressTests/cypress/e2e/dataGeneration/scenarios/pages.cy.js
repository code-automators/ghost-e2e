import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import data from "./../aprioriData/pages.json";


describe("Page Scenarios", () => {
    it("JP![A priori] Scenario 76: Look for a page", () => {
        // Given user visits the webpage
        const homePage = new HomePage();
        // When the user look for a page
        homePage.goToPage(data.scenario76.page);
        // Then the random page should inform it does not exists
        homePage.checkInexistentPage().should("exist");
    });

    it("JP![A priori] Scenario 82: Create a valid page", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user look for a page
        const pageList = homePage.goToPageList();
        // And clics on creating a page
        const pageDetail = pageList.goToCreatePage();
        const publishedPageList = pageDetail.createNewPage(data.scenario82.title);
        // Then the user should be able to see new page
        publishedPageList.getList().should("contain", data.scenario82.title);
    });
});