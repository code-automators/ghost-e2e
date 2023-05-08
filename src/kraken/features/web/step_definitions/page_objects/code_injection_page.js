const { expect } = require('chai');

const insertRandomParagraphOnHeader = async function (driver) {
    let randomParagraph = generateRandomParagraph(20)
    let headerTextInput = await driver.$('#ghost-head > .CodeMirror > .CodeMirror-scroll > .CodeMirror-sizer > [style="position: relative; top: 0px;"] > .CodeMirror-lines');
    await headerTextInput.click();
    await driver.keys(`<p class='inserted-p'>${randomParagraph}</p>`)
    return randomParagraph
}

const generateRandomParagraph = function (length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return `An inserted paragraph ${result}...`;
}

module.exports = {
    insertRandomParagraphOnHeader,
}
