import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";
import data from "./../aprioriData/codeInjection.json";
import { faker } from '@faker-js/faker';

describe("Code Injection Scenarios", () => {
    it("[A Priori] Scenario 28: Add valid injected code at header", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user goes to the code injection page
        let codeInjectionPage = homePage.goToCodeInjection();
        // And inserts a paragraph on page header
        codeInjectionPage.insertParagraphOnHeader(data.scenario28.paragraph);
        // Then all pages of website should contain that header
        let mainPage = homePage.goToMainPageSite();
        mainPage.getParagraphsByText(data.scenario28.paragraph).should('exist');
    });

    it("[Pseudo Random] Scenario 29: Add valid injected code at header", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user goes to the code injection page
        let codeInjectionPage = homePage.goToCodeInjection();
        // And inserts a paragraph on page header
        cy.request(`https://my.api.mockaroo.com/validParagraphs.json?key=${config.mockarooKey}`)
            .then((response) => {
                let paragraph = response.body.paragraph.trim();
                codeInjectionPage.insertParagraphOnHeader(paragraph);
                // Then all pages of website should contain that header
                let mainPage = homePage.goToMainPageSite();
                mainPage.getParagraphsByText(paragraph).should('exist');
            });
    });

    it("[Random] Scenario 30: Add valid injected code at header", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user goes to the code injection page
        let codeInjectionPage = homePage.goToCodeInjection();
        // And inserts a paragraph on page header
        let randomParagraph = faker.lorem.paragraph();
        codeInjectionPage.insertParagraphOnHeader(randomParagraph);
        // Then all pages of website should contain that header
        let mainPage = homePage.goToMainPageSite();
        mainPage.getParagraphsByText(randomParagraph).should('exist');
    });

    it("[A Priori] Scenario 31: Add valid injected code at footer", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user goes to the code injection page
        let codeInjectionPage = homePage.goToCodeInjection();
        // And inserts a paragraph on page header
        codeInjectionPage.insertParagraphOnFooter(data.scenario31.paragraph);
        // Then all pages of website should contain that header
        let mainPage = homePage.goToMainPageSite();
        mainPage.getParagraphsByText(data.scenario31.paragraph).should('exist');
    });

    it("[Pseudo Random] Scenario 32: Add valid injected code at footer", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user goes to the code injection page
        let codeInjectionPage = homePage.goToCodeInjection();
        // And inserts a paragraph on page header
        cy.request(`https://my.api.mockaroo.com/validParagraphs.json?key=${config.mockarooKey}`)
            .then((response) => {
                let paragraph = response.body.paragraph.trim();
                codeInjectionPage.insertParagraphOnFooter(paragraph);
                // Then all pages of website should contain that header
                let mainPage = homePage.goToMainPageSite();
                mainPage.getParagraphsByText(paragraph).should('exist');
            });
    });

    it("[Random] Scenario 33: Add valid injected code at footer", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user goes to the code injection page
        let codeInjectionPage = homePage.goToCodeInjection();
        // And inserts a paragraph on page header
        let randomParagraph = faker.lorem.paragraph();
        codeInjectionPage.insertParagraphOnFooter(randomParagraph);
        // Then all pages of website should contain that header
        let mainPage = homePage.goToMainPageSite();
        mainPage.getParagraphsByText(randomParagraph).should('exist');
    });
});
