import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";
import { takeCypressScreenshot } from "./utils/takeScreenshot";

describe("Scenario 8", () => {

    it("Edit an existing page and add an image to it", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("Scenario8", "login")
        // When the user wants to edit an existing page and upload an image
        let pageListPage = homePage.goToPageList();
        takeCypressScreenshot("Scenario8", "goToPageList")
        // And the user goes to the page list and selects a random page
        let pageToEdit = pageListPage.selectRandomPage();
        takeCypressScreenshot("Scenario8", "selectRandomPage")
        // And the user edits the page and uploads an image
        let editedPage = pageToEdit.uploadNewImage(config.image_path);
        takeCypressScreenshot("Scenario8", "uploadNewImage")
        // Then the edited page should be updated
        editedPage.should("contain", "Updated");
        takeCypressScreenshot("Scenario8", "checkPageUpdated")
    })

})