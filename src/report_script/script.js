const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const prompt = require('prompt-sync')({ sigint: true });
const validPath = require('validPath');

const { options } = config;

async function executeTest() {

    let oldVersionFolder = "";
    let newVersionFolder = "";
    let menu = true;

    while (menu) {
        if (oldVersionFolder === "") {
            oldVersionFolder = prompt('Enter the old version folder path: ');
            if (!validPath(oldVersionFolder)) {
                console.log("Invalid path, please try again");
                oldVersionFolder = "";
                continue;
            }
        }

        newVersionFolder = prompt('Enter the new version folder path: ');
        if (!validPath(newVersionFolder)) {
            console.log("Invalid path, please try again");
            continue;
        }
    }

    let date = new Date();
    let datetime = date.getFullYear() + '-' + (date.getMonth()) + '-' + date.getDate();
    if (!fs.existsSync(`./reports/${datetime}`)) {
        fs.mkdirSync(`./reports/${datetime}/`, { recursive: true });
    }
    let resultInfo = {}
    fs.readdir(newVersionFolder, async function (err, files) {
        if (err) {
            console.error("Could not list the directory.", err);
            process.exit(1);
        }

        for (file in files) {
            let filename = file.split(/(\\|\/)/g).pop()
            const data = await compareImages(
                fs.readFileSync(`${oldVersionFolder}/${filename}`),
                fs.readFileSync(`${newVersionFolder}/${filename}`),
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
            fs.writeFileSync(`./results/${datetime}/compare-${fileName}`, data.getBuffer());
        }
    })


    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;
}
(async () => console.log(await executeTest()))();