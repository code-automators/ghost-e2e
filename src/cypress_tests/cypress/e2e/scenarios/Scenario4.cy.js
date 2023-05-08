import { SignInPage } from "../pages/signinPage.cy";
import { takeCypressScreenshot } from "./utils/takeScreenshot";
import  config  from "./assets/config.json";


describe("Scenario4", () => {

    it("Publish a new page", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        takeCypressScreenshot("Scenario4", "login")
        // When the user wants to publish a new page
        let pageListPage = homePage.goToPageList();
        takeCypressScreenshot("Scenario4", "goToPageList")
        // And the user goes to the page list and selects new page
        let newPage = pageListPage.goToCreatePage();
        takeCypressScreenshot("Scenario4", "goToCreatePage")
        // And the user fills out the form and publishes the page
        let publishedList = newPage.createNewPage(config.new_page_name);
        takeCypressScreenshot("Scenario4", "createNewPage")
        // Then the new page should be present in the "Published" section
        publishedList.getList().should("contain", config.new_page_name);
        takeCypressScreenshot("Scenario4", "checkNewPagePublished")
    })

})