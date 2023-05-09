const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const prompt = require('prompt-sync')({sigint: true});

const { options } = config;

async function executeTest() {

    let resultInfo = {}
    const data = await compareImages(
        fs.readFileSync(`./results/${datetime}/before-${b}.png`),
        fs.readFileSync(`./results/${datetime}/after-${b}.png`),
        options
    );
    resultInfo[b] = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime
    }
    fs.writeFileSync(`./results/${datetime}/compare-${b}.png`, data.getBuffer());


    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;
}
(async () => console.log(await executeTest()))();