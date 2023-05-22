import { PostPageList } from "./postListPage.cy";
import { PageListPage } from "./pageListPage.cy";
import { ProfilePage } from "./profilePage.cy";
import { SignInPage } from "./signinPage.cy";
import { TagsListPage } from "./tagsListPage.cy";
import { SettingsPage } from "./settingsPage.cy";
import { MainPageSite } from "./mainPageSite.cy";
import { AuthorPageSite } from "./authorPageSite.cy";
import { IntegrationListPage } from "./integrationListPage.cy";
import { DesignPage } from "./designPage.cy";
import { CodeInjectionPage } from "./codeInjectionPage.cy";
import { MembersPage } from "./membersPage.cy";
import { StaffPage } from "./staffPage.cy";

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
    cy.wait(1000);
    this.closeLeavingAlert();
    return new PostPageList();
  }

  goToPostListFilteredByTag(slug) {
    let host = window.location.origin;
    cy.visit(host + "/ghost/#/posts?tag=" + slug);
    return new PostPageList();
  }

  goToPageList() {
    let host = window.location.origin;
    cy.visit(host + "/ghost/#/pages");
    return new PageListPage();
  }

  goToTagsList() {
    let host = window.location.origin;
    cy.visit(host + "/ghost/#/tags");
    cy.wait(2000);
    this.closeLeavingAlert();
    return new TagsListPage();
  }

  goToIntegrationsList() {
    let host = window.location.origin;
    cy.visit(host + "/ghost/#/settings/integrations")
    return new IntegrationListPage();
  }

  goToDesignPage() {
    let host = window.location.origin;
    cy.visit(host + "/ghost/#/settings/design")
    return new DesignPage();
  }

  goToProfile() {
    cy.wait(500);
    cy.contains("Staff").click({ force:true });
    cy.contains("Owner").click({ force:true });
    return new ProfilePage();
  }

  goToGeneralSettings() {
    let host = window.location.origin;
    cy.visit(host + "/ghost/#/settings/general");
    return new SettingsPage();
  }

  goToCodeInjection() {
    let host = window.location.origin;
    cy.visit(host + "/ghost/#/settings/code-injection");
    return new CodeInjectionPage();
  }

  goToMainPageSite() {
    let host = window.location.origin;
    cy.visit(host);
    cy.wait(1000);
    return new MainPageSite();
  }

  goToAuthorPage(authorSlug) {
    let host = window.location.origin;
    cy.visit(`${host}/author/${authorSlug}`);
    return new AuthorPageSite();
  }

  goToMembersPage() {
    let host = window.location.origin;
    cy.visit(host + "/ghost/#/members");
    return new MembersPage();
  }

  goToStaffPage() {
    let host = window.location.origin;
    cy.visit(host + "/ghost/#/staff");
    return new StaffPage();
  }

  logout() {
    let host = window.location.origin;
    cy.visit(host + "/ghost/#/signout");
    return new SignInPage();
  }

  // Close stochastic leaving page alert
  closeLeavingAlert() {
    cy.get('body').then(($body) => {
      if ($body.text().includes('Leave')) {
        cy.get('.gh-btn-red').eq(1).click();
      }
    });
  }

  goToPage(page) {
    let host = window.location.origin;
    cy.visit(`${host}/${page}`, {failOnStatusCode: false});
  }

  checkInexistentPage() {
    return cy.contains("404");
  }
}

export { HomePage };
