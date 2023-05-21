import { SignInPage } from "./../pages/signinPage.cy";
import { HomePage } from "../pages/homePage.cy";
import config from "./../assets/config.json";
import data from "./../aprioriData/generalSettings.json";
import { faker } from "@faker-js/faker";

describe("General Settings Scenarios", () => {
  it("[A Priori] Scenario 22: Edit valid general settings (publication info)", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the blog settings
    settingsPage.changeSettings(data.scenario22.siteName, data.scenario22.siteDescription, data.scenario22.siteLanguage);
    let mainPage = homePage.goToMainPageSite();
    // Then the changes should be reflected in the main page
    mainPage.getPageItem(data.scenario22.siteName).should("exist");
    mainPage.getPageItem(data.scenario22.siteDescription).should("exist");
  })

  it("[Pseudo Random] Scenario 23: Edit valid general settings (publication info)", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the blog settings
    cy.request(`https://my.api.mockaroo.com/validSettingsPublicationInfo.json?key=${config.mockarooKey}`)
      .then((response) => {
        settingsPage.changeSettings(response.body.siteName, response.body.siteDescription, response.body.siteLanguage);
        let mainPage = homePage.goToMainPageSite();
        // Then the changes should be reflected in the main page
        mainPage.getPageItem(response.body.siteName).should("exist");
        mainPage.getPageItem(response.body.siteDescription).should("exist");
      })
  })

  it("[Random] Scenario 24: Edit valid general settings (publication info)", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the blog settings
    let siteName = faker.company.name();
    let siteDescription = faker.company.catchPhrase();
    settingsPage.changeSettings(siteName, siteDescription, faker.helpers.arrayElement(['en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'zh', 'ko']));
    let mainPage = homePage.goToMainPageSite();
    // Then the changes should be reflected in the main page
    mainPage.getPageItem(siteName).should("exist");
    mainPage.getPageItem(siteDescription).should("exist");
  })

  it("[A Priori] Scenario 25: Edit invalid general settings (publication info)", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the blog settings
    settingsPage.changeSettings(data.scenario25.siteName, data.scenario25.siteDescription, data.scenario25.siteLanguage, false);
    // Then the changes should raise errors
    settingsPage.getTitleError().should("exist");
    settingsPage.getDescriptionError().should("exist");
  })


  it("[Pseudo Random] Scenario 26: Edit invalid general settings (publication info)", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the blog settings
    cy.request(`https://my.api.mockaroo.com/invalidSettingsPublicationInfo.json?key=${config.mockarooKey}`)
      .then((response) => {
        settingsPage.changeSettings(response.body.siteName, response.body.siteDescription, response.body.siteLanguage, false);
        // Then the changes should raise errors
        settingsPage.getTitleError().should("exist");
        settingsPage.getDescriptionError().should("exist");
      })
  })

  it("[Random] Scenario 27: Edit invalid general settings (publication info)", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the blog settings
    settingsPage.changeSettings(faker.lorem.paragraphs(3), faker.lorem.paragraphs(8), faker.lorem.paragraphs(3), false);
    // Then the changes should raise errors
    settingsPage.getTitleError().should("exist");
    settingsPage.getDescriptionError().should("exist");
  })

  it("[Random] Scenario 120: Make the website private and change password", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the settings and makes the blog private
    let scenarioPassword = faker.internet.password();
    settingsPage.togglePrivateAndChangePassword(scenarioPassword);
    // Then when the user goes to the main page, it should be private
    let mainPage = homePage.goToMainPageSite();
    mainPage.checkIfSiteIsPrivate().should('contain', 'This site is private');
    mainPage.loginPrivateSite(scenarioPassword);
  })

  it("[A Priori] Scenario 100: Edit general settings metadata (Meta description exceeds 1000 characters)", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the meta data
    settingsPage.addMetaData(
      data.scenario100.metaTitle,
      data.scenario100.metaDescription
    );
    // Then the changes should be reflected in the main page
    settingsPage
      .checkMetadataValidation()
      .should("exist");
  });

  it("[Pseudo Random] Scenario 101: Edit general settings metadata (Meta description exceeds 1000 characters)", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();

    cy.request(
      `https://my.api.mockaroo.com/metadataSettings.json?key=${config.mockarooKey}`
    ).then((response) => {
      // And the user changes the meta data
      settingsPage.addMetaData(
        response.body.title,
        response.body.description
      );
      // Then the changes should be reflected in the main page
      settingsPage.checkMetadataValidation().should("exist");
    });
  });

  it("[Random] Scenario 102: Edit general settings metadata (Meta description exceeds 1000 characters)", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the meta data
    settingsPage.addMetaData(
      faker.lorem.text(),
      faker.lorem.text({ length: 1000 })
    );
    // Then the changes should be reflected in the main page
    settingsPage.checkMetadataValidation().should("exist");
  });

  after(() => {
    let homePage = new HomePage();
    let settingsPage = homePage.goToGeneralSettings();
    settingsPage.togglePrivate();
  });

  it("[A Priori] Scenario 103: Edit general settings with a valid Facebook link", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the general settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the URL of their Facebook Page
    settingsPage.changeFacebookLink(data.scenario103.facebookLink);
    // Then the main page Facebook icon should navigate to the previous defined URL
    let mainPage = homePage.goToMainPageSite();
    mainPage.clickFacebookIcon();
    mainPage.checkIsCurrentUrl(data.scenario103.facebookLink);
  });

  it("[Pseudo Random] Scenario 104: Edit general settings with a valid Facebook link", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the general settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the URL of their Facebook Page
    cy.request(`https://my.api.mockaroo.com/validSocialAccountsURLs.json?key=${config.mockarooKey}`)
      .then((response) => {
        settingsPage.changeFacebookLink(response.body.facebook);
        // Then the main page Facebook icon should navigate to the previous defined URL
        let mainPage = homePage.goToMainPageSite();
        mainPage.clickFacebookIcon();
        mainPage.checkIsCurrentUrl(response.body.facebook);
      });
  });

  it("[Random] Scenario 105: Edit general settings with a valid Facebook link", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the general settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the URL of their Facebook Page
    let fakeFacebookUrl = faker.internet.url('facebook.com');
    settingsPage.changeFacebookLink(fakeFacebookUrl);
    // Then the main page Facebook icon should navigate to the previous defined URL
    let mainPage = homePage.goToMainPageSite();
    mainPage.clickFacebookIcon();
    mainPage.checkIsCurrentUrl(fakeFacebookUrl);
  });

  it("[A Priori] Scenario 106: Edit general settings with an invalid Facebook link", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the general settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the URL of their Facebook Page
    settingsPage.changeFacebookLink(data.scenario106.exampleLink);
    // Then an error message should be shown
    settingsPage.checkFacebookUrlError().should('exist');
  });

  it("[Pseudo Random] Scenario 107: Edit general settings with an invalid Facebook link", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the general settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the URL of their Facebook Page
    cy.request(`https://my.api.mockaroo.com/generalURLs.json?key=${config.mockarooKey}`)
      .then((response) => {
        settingsPage.changeFacebookLink(response.body.url);
        // Then an error message should be shown
        settingsPage.checkFacebookUrlError().should('exist');
      });
  });

  it("[Random] Scenario 108: Edit general settings with an invalid Facebook link", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the general settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the URL of their Facebook Page
    settingsPage.changeFacebookLink(faker.internet.url());
    // Then an error message should be shown
    settingsPage.checkFacebookUrlError().should('exist');
  });
});
