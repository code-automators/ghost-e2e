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
  });

  it("[A Priori] Scenario 79: Add invalid meta title in general settings", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user adds an invalid metatitle in the settings table
    settingsPage.addMetatitle(data.scenario79.metaTitle);
    // Then the metatitle word counter should be in red color
    let metatitleWordCounter = settingsPage.getMetatileWordCounter();
    metatitleWordCounter.should("have.css", "color").and("match", /(226, 84, 64)/);
  });

  it("[Pseudo Random] Scenario 80: Add invalid meta title in general settings", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user adds an invalid metatitle in the settings table
    cy.request(`https://my.api.mockaroo.com/invalidMetatitles.json?key=${config.mockarooKey}`)
      .then((response) => {
        let title = response.body.title.trim();
        settingsPage.addMetatitle(title);
      });
    // Then the metatitle word counter should be in red color
    let metatitleWordCounter = settingsPage.getMetatileWordCounter();
    metatitleWordCounter.should("have.css", "color").and("match", /(226, 84, 64)/);
  });

  it("[Random] Scenario 81: Add invalid meta title in general settings", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user adds an invalid metatitle in the settings table
    settingsPage.addMetatitle(faker.lorem.paragraph(3));
    // Then the metatitle word counter should be in red color
    let metatitleWordCounter = settingsPage.getMetatileWordCounter();
    metatitleWordCounter.should("have.css", "color").and("match", /(226, 84, 64)/);
  });

  it("[A Priori] Scenario 97: Add valid meta title in general settings", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user adds an invalid metatitle in the settings table
    settingsPage.addMetatitle(data.scenario97.metaTitle);
    // Then the metatitle word counter should be in red color
    let metatitleWordCounter = settingsPage.getMetatileWordCounter();
    metatitleWordCounter.should("have.css", "color").and("match", /(159, 187, 88)/);
  });

  it("[Pseudo Random] Scenario 98: Add valid meta title in general settings", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user adds an invalid metatitle in the settings table
    cy.request(`https://my.api.mockaroo.com/validMetatitles.json?key=${config.mockarooKey}`)
      .then((response) => {
        let title = response.body.metatitle.trim();
        settingsPage.addMetatitle(title);
      });
    // Then the metatitle word counter should be in red color
    let metatitleWordCounter = settingsPage.getMetatileWordCounter();
    metatitleWordCounter.should("have.css", "color").and("match", /(159, 187, 88)/);
  });

  it("[Random] Scenario 99: Add valid meta title in general settings", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the blog's settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user adds an invalid metatitle in the settings table
    settingsPage.addMetatitle(faker.lorem.sentence());
    // Then the metatitle word counter should be in red color
    let metatitleWordCounter = settingsPage.getMetatileWordCounter();
    metatitleWordCounter.should("have.css", "color").and("match", /(159, 187, 88)/);
  });

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
      faker.lorem.paragraph(10)
    );
    // Then the changes should be reflected in the main page
    settingsPage.checkMetadataValidation().should("exist");
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
    const username = faker.internet.userName();
    const fakeFacebookUrl = `https://facebook.com/${username}`;
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

  it("[A Priori] Scenario 109: Edit general settings with a valid Twitter link", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the general settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the URL of their Twitter profile
    settingsPage.changeTwitterLink(data.scenario109.twitterLink);
    // Then the main page Twitter icon should navigate to the previous defined URL
    let mainPage = homePage.goToMainPageSite();
    mainPage.clickTwitterIcon();
    mainPage.checkIsCurrentUrl(data.scenario109.twitterLink);
  });

  it("[Pseudo Random] Scenario 110: Edit general settings with a valid Twitter link", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the general settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the URL of their Twitter profile
    cy.request(`https://my.api.mockaroo.com/validSocialAccountsURLs.json?key=${config.mockarooKey}`)
      .then((response) => {
        settingsPage.changeTwitterLink(response.body.twitter);
        // Then the main page Twitter icon should navigate to the previous defined URL
        let mainPage = homePage.goToMainPageSite();
        mainPage.clickTwitterIcon();
        mainPage.checkIsCurrentUrl(response.body.twitter);
      });
  });

  it("[Random] Scenario 111: Edit general settings with a valid Twitter link", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the general settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the URL of their Twitter profile
    const username = faker.internet.userName();
    const fakeTwitterUrl = `https://twitter.com/${username}`;
    settingsPage.changeTwitterLink(fakeTwitterUrl);
    // Then the main page Twitter icon should navigate to the previous defined URL
    let mainPage = homePage.goToMainPageSite();
    mainPage.clickTwitterIcon();
    mainPage.checkIsCurrentUrl(fakeTwitterUrl);
  });

  it("[A Priori] Scenario 112: Edit general settings with an invalid Twitter link", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the general settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the URL of their Twitter profile
    settingsPage.changeTwitterLink(data.scenario112.exampleLink);
    // Then an error message should be shown
    settingsPage.checkTwitterUrlError().should('exist');
  });

  it("[Pseudo Random] Scenario 113: Edit general settings with an invalid Twitter link", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the general settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the URL of their Twitter profile
    cy.request(`https://my.api.mockaroo.com/generalURLs.json?key=${config.mockarooKey}`)
      .then((response) => {
        settingsPage.changeTwitterLink(response.body.url);
        // Then an error message should be shown
        settingsPage.checkTwitterUrlError().should('exist');
      });
  });

  it("[Random] Scenario 114: Edit general settings with an invalid Twitter link", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    // When the user wants to change the general settings
    let settingsPage = homePage.goToGeneralSettings();
    // And the user changes the URL of their Twitter profile
    settingsPage.changeTwitterLink(faker.internet.url());
    // Then an error message should be shown
    settingsPage.checkTwitterUrlError().should('exist');
  });

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
  });

  after(() => {
    let homePage = new HomePage();
    let settingsPage = homePage.goToGeneralSettings();
    settingsPage.togglePrivate();
  });
});
