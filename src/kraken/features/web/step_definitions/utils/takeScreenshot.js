const fs = require('fs');
const config = require('./../../../../properties.json');

const takeKrakenScreenshot = async (driver, scenario, step) => {
    let date = new Date();
    let datetime = date.getFullYear() + '-' + (date.getMonth()) + '-' + date.getDate();
    let ghostVersion = config.GHOST_VER;
    if (!fs.existsSync(`./screenshots/${datetime}/v${ghostVersion}`)) {
        fs.mkdirSync(`./screenshots/${datetime}/v${ghostVersion}`, { recursive: true });
    }

    await driver.saveScreenshot(`./screenshots/${datetime}/v${ghostVersion}/${scenario}_${step}.png`);

}

module.exports = {
    takeKrakenScreenshot
}