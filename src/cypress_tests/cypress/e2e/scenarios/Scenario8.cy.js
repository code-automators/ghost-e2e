import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";

describe("Editar una página existente y agregar una imagen", () => {

    it("Escenario 8", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit an existing page and upload an image
        let pageListPage = homePage.goToPageList();
        // The user goes to the page list and selects a random page
        let pageToEdit = pageListPage.selectRandomPage();
        // The user edits the page and uploads an image
        let editedPage = pageToEdit.uploadNewImage(config.image_path);
        // Then the edited page should be updated
        editedPage.should("contain", "Updated");
    })

})