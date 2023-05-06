import { SignInPage } from "../pages/signinPage.cy";
import  config  from "./assets/config.json";

describe("Editar una página existente y agregar una imagen", () => {

    it("Escenario 8", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.password);
        // When the user wants to edit a new page and
        let pageListPage = homePage.goToPageList();
        let pageToEdit = pageListPage.selectRandomPage();
        let editedPage = pageToEdit.uploadNewImage(config.image_path);
        // Then the edited page should be updated
        editedPage.should("contain", "Updated");
    })

})