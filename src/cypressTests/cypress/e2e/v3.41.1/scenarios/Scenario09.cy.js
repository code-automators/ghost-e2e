import { SignInPage } from "./../pages/signinPage.cy";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";
import config from "./../assets/config.json";


describe("Create a page with an image", () => {
  it("Scenario09", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    let homePage = signinPage.login(config.user, config.password);
    takeCypressScreenshot("login");
    // When the user wants to edit an existing page and upload an image
    let pageListPage = homePage.goToPageList();
    takeCypressScreenshot("goToPageList");
    // The user goes to the page list and selects a random page
    let createPage = pageListPage.goToCreatePage();
    takeCypressScreenshot("goToCreatePage");
    // The user creates the page and uploads an image
    let newPage = createPage.createNewImagedPage(config.new_page_name, config.image_path);
    takeCypressScreenshot("createNewImagedPage");
    // Then the edited page should be updated
    newPage.getList().should("contain", config.new_page_name);
    takeCypressScreenshot("checkNewImagedPageCreated");
  });
});
