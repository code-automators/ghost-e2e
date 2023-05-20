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
            .type('{meta+a}{backspace}')
            .type(`<p>${randomParagraph}</p>`);
        cy.contains('Save').click();
        return randomParagraph;
    }

    insertParagraphOnHeader(paragraph) {
        cy.get('#ghost-head > .CodeMirror > .CodeMirror-scroll')
            .type('{meta+a}{backspace}')
            .type(`<p>${paragraph}</p>`);
        cy.contains('Save').click();
        cy.wait(2000);
    }

    insertParagraphOnFooter(paragraph) {
        cy.get('#ghost-foot > .CodeMirror > .CodeMirror-scroll')
            .type('{meta+a}{backspace}')
            .type(`<p>${paragraph}</p>`);
        cy.contains('Save').click();
        cy.wait(2000);
    }

    generateRandomParagraph(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return `An inserted paragraph ${result}...`;
    }

    checkErrorByMessage(msg) {
        return cy.contains(msg);
    }
}

export { CodeInjectionPage };
