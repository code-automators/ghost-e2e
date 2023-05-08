const { expect } = require("chai");


const checkAuthorOptions = async function (driver) {
    // Get all author social links <a> elements
    let options = await driver.$$("span.author-social-link");
    // Parse them into a list of strings
    const authorOptions = await Promise.all(options.map(option => option.getText()));
    // Social links labels should match following three social media
    expect(authorOptions).contain("WEBSITE");
    expect(authorOptions).contain("TWITTER");
    expect(authorOptions).contain("FACEBOOK");
}


module.exports = {
    checkAuthorOptions
}
