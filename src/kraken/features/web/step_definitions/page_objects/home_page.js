const expect = require('chai').expect;


const checkNavigationOption = async function (driver, optionLabel) {
    let options = await driver.$("div[class$='site-nav-left']").$$("a");
    const labels = await Promise.all(options.map(option => option.getText()));
    let found = labels.some(element => element === optionLabel.toUpperCase());
    expect(found).to.be.true;
}

module.exports = {
    checkNavigationOption
}
