import config from './../assets/config.json';

export function takeCypressScreenshot(stepName) {
    let ghostVersion = config.ghost_ver;
    cy.screenshot(`v${ghostVersion}_${Cypress.currentTest.titlePath[0].replace(' ', '')}_${stepName}`, {overwrite: true});
}