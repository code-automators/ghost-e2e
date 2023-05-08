const expect = require('chai').expect;


const checkNavigationOption = async function (driver, optionLabel) {
    let options = await driver.$("div[class$='site-nav-left']").$$("a");
    const labels = await Promise.all(options.map(option => option.getText()));
    let found = labels.some(element => element === optionLabel.toUpperCase());
    expect(found).to.be.true;
}

const checkParagraphOnSite = async function (driver, paragraph) {
    const pageTexts = await driver.$$('.inserted-p');
    let found = false;
    for (let i = 0; i < pageTexts.length; i++) {
        const pageText = await pageTexts[i].getText();
        if (pageText.includes(paragraph)) {
            found = true;
            break;
        }
    }
    expect(found).to.be.true;
}

module.exports = {
    checkNavigationOption,
    checkParagraphOnSite,
}
