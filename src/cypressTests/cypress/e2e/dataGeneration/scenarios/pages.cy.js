import { HomePage } from "../pages/homePage.cy";
import data from "./../aprioriData/pages.json";


describe("Page Scenarios", () => {
    it("JP![Pseudo Random] Scenario 76: Look for a page", () => {
        // Given user visits the webpage
        const homePage = new HomePage();
        // When the user look for a page
        homePage.goToPage(data.scenario76.page);
        // Then the random page should inform it does not exists
        homePage.checkInexistentPage().should("exist");
    });
});
