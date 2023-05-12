import { SignInPage } from "./../pages/signinPage.cy";
import config from "./../assets/config.json";

describe("Create a page with an image", () => {

    it("Scenario09", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit an existing page and upload an image
        let pageListPage = homePage.goToPageList();
        // The user goes to the page list and selects a random page
        let createPage = pageListPage.goToCreatePage();
        // The user creates the page and uploads an image
        let newPage = createPage.createNewImagedPage(config.new_page_name, config.image_path);
        // Then the edited page should be updated
        newPage.getList().should("contain", config.new_page_name);
    });
})