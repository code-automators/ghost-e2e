const { defineConfig } = require('cypress')
const fs = require('fs')

module.exports = defineConfig({
  e2e: {
    video: false,
    trashAssetsBeforeRuns: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('after:screenshot', (details) => {
        if (details.name == undefined){
          return
        }

        const screenshotName = details.name.split('_');

        const screenshotVersion = screenshotName[0];
        const screenshotScenario = screenshotName[1];
        const screenshotStep = screenshotName[2];

        const date = new Date();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const datetime = date.getFullYear() + '-' + month + '-' + date.getDate();

        const newPath = `./cypress/screenshots/${datetime}/${screenshotVersion}/${screenshotScenario}_${screenshotStep}.png`;

        if (!fs.existsSync(`./cypress/screenshots/${datetime}/${screenshotVersion}`)) {
          fs.mkdirSync(`./cypress/screenshots/${datetime}/${screenshotVersion}`, { recursive: true });
        }

        return new Promise((resolve, reject) => {
          // fs.rename moves the file to the existing directory 'new/path/to'
          // and renames the image to 'screenshot.png'
          fs.rename(details.path, newPath, (err) => {
            if (err) return reject(err)
            fs.rmdir(`./cypress/screenshots/${details.specName}`, (err) => {})

            // because we renamed and moved the image, resolve with the new path
            // so it is accurate in the test results
            resolve({ path: newPath })
          })
        })
      })
    },
  },
})