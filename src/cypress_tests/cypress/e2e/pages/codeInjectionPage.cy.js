class CodeInjectionPage {
    CodeInjectionPage() {
        if (!cy.url().should("include", "/ghost/#/settings/code-injection")) {
            throw new IllegalStateException(
                "This is not the Code Injection Page, current page is: " + cy.url()
            );
        }
    }

    insertRandomParagraphOnHeader() {
        let randomParagraph = this.generateRandomParagraph(20)
        cy.get('#ghost-head > .CodeMirror > .CodeMirror-scroll > .CodeMirror-sizer > [style="position: relative; top: 0px;"] > .CodeMirror-lines')
            .type(`<p>${randomParagraph}</p>`);
        cy.contains('Save').click();
        return randomParagraph
    }

    generateRandomParagraph(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return `An inserted paragraph ${result}...`;
    }
}

export { CodeInjectionPage };
