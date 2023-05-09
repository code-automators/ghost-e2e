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


function browser(b, info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="before-${b}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="after-${b}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}


function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.browsers.map(b=>browser(b, resInfo[b]))}
            </div>
        </body>
    </html>`
}

(async () => console.log(await executeTest()))();
