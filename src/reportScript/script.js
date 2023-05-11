const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");
const readlineSync = require('readline-sync');
const validPath = require("valid-path");

const { options } = config;

async function executeTest() {
  const oldVersionFolder = getUserInput("Enter the old version folder path: ");
  const newVersionFolder = getUserInput("Enter the new version folder path: ");

  const datetime = getFormattedDate();
  const reportDirectory = `./VRTReports/${datetime}`;
  const screenshotDirectory = `${reportDirectory}/screenshots`
  createDirectory(screenshotDirectory);

  const resultInfo = await compareFiles(oldVersionFolder, newVersionFolder, screenshotDirectory);
  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log(
    "Execution finished. Check the report under the results folder"
  );
  return resultInfo;
}

function getUserInput(message) {
  let input = "";
  while (!input) {
    input = readlineSync.question(message);
    if (!validPath(input)) {
      console.log("Invalid path, please try again");
      input = "";
    }
  }
  return input;
}

function getFormattedDate() {
  let date = new Date();
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate()
  );
}

function createDirectory(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
}

async function compareFiles(oldVersionFolder, newVersionFolder, screenshotDirectory) {
  const resultInfo = {};
  const files = fs.readdirSync(newVersionFolder);

  for (const file of files) {
    const filename = file.split(/(\|\/)/g).pop();

    // Copy old and new version files to the VRT Report folder
    if(!fs.existsSync(`${oldVersionFolder}/${filename}`)){
      console.log(`File ${filename} not found in ${oldVersionFolder}`);
      continue;
    }
    console.log(`Comparing ${filename}`)
    fs.copyFileSync(`${oldVersionFolder}/${filename}`, `${screenshotDirectory}/before-${filename}`);
    fs.copyFileSync(`${newVersionFolder}/${filename}`, `${screenshotDirectory}/after-${filename}`);

    const data = await compareImages(
      fs.readFileSync(`${screenshotDirectory}/before-${filename}`),
      fs.readFileSync(`${screenshotDirectory}/after-${filename}`),
      options
    );

    resultInfo[file] = {
      isSameDimensions: data.isSameDimensions,
      dimensionDifference: data.dimensionDifference,
      rawMisMatchPercentage: data.rawMisMatchPercentage,
      misMatchPercentage: data.misMatchPercentage,
      diffBounds: data.diffBounds,
      analysisTime: data.analysisTime,
    };

    fs.writeFileSync(
      `${screenshotDirectory}/compare-${filename}`,
      data.getBuffer()
    );
  }

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