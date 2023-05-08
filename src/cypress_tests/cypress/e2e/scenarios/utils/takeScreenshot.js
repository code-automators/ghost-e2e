import config from '../assets/config.json';

export function takeCypressScreenshot(scenario, step){
    let date = new Date();
    let datetime = date.getFullYear() + '-' + (date.getMonth()) + '-' + date.getDate();
    let ghostVersion = config.ghost_ver;
    cy.screenshot(`./cypress/screenshots/${datetime}/v${ghostVersion}/${scenario}_${step}`);
}