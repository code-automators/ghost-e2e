import config from './../assets/config.json';

export function takeScreenshot(stepName) {
    let date = new Date();
    let datetime = date.getFullYear() + '-' + (date.getMonth()) + '-' + date.getDate();
    let ghostVersion = config.ghost_ver;
    cy.screenshot(`./cypress/screenshots/${datetime}/v${ghostVersion}/${Cypress.currentTest.titlePath[0].replace(' ', '')}_${stepName}`);
}