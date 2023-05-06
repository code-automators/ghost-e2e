import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";


describe("Publicar una nueva página", () => {

    it("Escenario 4", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to publish a new page
        let pageListPage = homePage.goToPageList();
        // The user goes to the page list and selects new page
        let newPage = pageListPage.goToCreatePage();
        // The user fills out the form and publishes the page
        let publishedList = newPage.createNewPage(config.new_page_name);
        // Then the new page should be present in the "Published" section
        publishedList.getList().should("contain", config.new_page_name);
    })

})