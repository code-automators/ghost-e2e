import { PostPageList } from "./postListPage.cy";
import { PageListPage } from "./pageListPage.cy";
import { ProfilePage } from "./profilePage.cy";
import { SignInPage } from "./signinPage.cy";
import { TagsListPage } from "./tagsListPage.cy";
import { SettingsPage } from "./settingsPage.cy";
import { MainPageSite } from "./mainPageSite.cy";
import { IntegrationListPage } from "./integrationListPage.cy";

class HomePage {
  HomePage() {
    if (!cy.url().should("include", "/ghost/#/site")) {
      throw new IllegalStateException(
        "This is not Home Page current page is: " + cy.url()
      );
    }
  }

  getUrl() {
    return cy.url()
  }

  goToPostList() {
    let host = window.location.origin;
    cy.visit(host + "/ghost/#/posts");
    return new PostPageList();
  }

  goToPostListFilteredByTag(slug) {
    let host = window.location.origin;
    cy.visit(host + "/ghost/#/posts?tag=" + slug);
    return new PostPageList();
  }

  goToPageList() {
    let host = window.location.origin
    cy.visit(host + "/ghost/#/pages");
    return new PageListPage();
  }

  goToTagsList() {
    let host = window.location.origin
    cy.visit(host + "/ghost/#/tags")
    return new TagsListPage();
  }

  goToIntegrationsList() {
    let host = window.location.origin
    cy.visit(host + "/ghost/#/settings/integrations")
    return new IntegrationListPage();
  }

  goToProfile() {
    cy.wait(500)
    cy.contains("Staff").click()
    cy.contains("Owner").click()
    return new ProfilePage();
  }

  goToGeneralSettings() {
    let host = window.location.origin
    cy.visit(host + "/ghost/#/settings/general")
    return new SettingsPage();
  }

  goToMainPageSite() {
    let host = window.location.origin
    cy.visit(host)
    return new MainPageSite();
  }

  logout() {
    let host = window.location.origin
    cy.visit(host + "/ghost/#/signout")
    return new SignInPage();
  }
}

export { HomePage };
