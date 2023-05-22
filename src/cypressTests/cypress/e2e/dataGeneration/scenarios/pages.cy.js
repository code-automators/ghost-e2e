import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import data from "./../aprioriData/pages.json";
import { faker } from "@faker-js/faker";


describe("Page Scenarios", () => {
    it("[A priori] Scenario 76: Look for a page", () => {
        // Given user visits the webpage
        //const homePage = new HomePage();
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user look for a page
        homePage.goToPage(data.scenario76.page);
        // Then the random page should inform it does not exists
        homePage.checkInexistentPage().should("exist");
    });

    it("[Pseudo Random] Scenario 77: Look for a page", () => {
        // Given user visits the webpage
        //const homePage = new HomePage();
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        cy.request(
            `https://my.api.mockaroo.com/validPage.json?key=${config.mockarooKey}`
        ).then((response) => {
            // When the user look for a page
            homePage.goToPage(response.body.pageName);
            // Then the random page should inform it does not exists
            homePage.checkInexistentPage().should("exist");
        });
    });

    it("[Random] Scenario 78: Look for a page", () => {
        // Given user visits the webpage
        //const homePage = new HomePage();
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user look for a page
        homePage.goToPage(faker.internet.domainName());
        // Then the random page should inform it does not exists
        homePage.checkInexistentPage().should("exist");
    });

    it("[A priori] Scenario 82: Create a valid page", () => {
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

    it("[Pseudo Random] Scenario 83: Create a valid page", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user look for a page
        const pageList = homePage.goToPageList();
        cy.request(
            `https://my.api.mockaroo.com/validPage.json?key=${config.mockarooKey}`
        ).then((response) => {
            // And clics on creating a page
            const pageDetail = pageList.goToCreatePage();
            let newPage = response.body.pageName;
            const publishedPageList = pageDetail.createNewPage(newPage);
            // Then the user should be able to see new page
            publishedPageList.getList().should("contain", newPage);
        });
    });

    it("[Random] Scenario 84: Create a valid page", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user look for a page
        const pageList = homePage.goToPageList();
        // And clics on creating a page
        const pageDetail = pageList.goToCreatePage();
        let newPage = faker.internet.domainName();
        const publishedPageList = pageDetail.createNewPage(newPage);
        // Then the user should be able to see new page
        publishedPageList.getList().should("contain", newPage);
    });
});