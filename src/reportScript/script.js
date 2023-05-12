const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");
const readlineSync = require('readline-sync');
const validPath = require("valid-path");

const { options } = config;

async function executeTest() {
  let oldVersionFolder = null;
  let newVersionFolder = null;

  if (process.argv.length == 2) {
    oldVersionFolder = getUserInput("Enter the old version folder path: ");
    newVersionFolder = getUserInput("Enter the new version folder path: ");
  } else if (process.argv.length != 4) {
    console.log("Invalid number of arguments");
    return;
  }
  else {
    oldVersionFolder = process.argv[2];
    newVersionFolder = process.argv[3];
    if (!validPath(oldVersionFolder) || !validPath(newVersionFolder)) {
      console.log("Invalid paths in the arguments, please try again");
      return;
    }
  }

  if (oldVersionFolder == newVersionFolder) {
    console.log("The comparison folders must be different");
    return;
  }

  const datetime = getFormattedDate();
  const reportDirectory = `./VRTReports/${datetime}`;
  const screenshotDirectory = `${reportDirectory}/screenshots`
  createDirectory(screenshotDirectory);

  const resultInfo = await compareFiles(oldVersionFolder, newVersionFolder, screenshotDirectory);
  const reportContent = createReport(getDateString(), resultInfo);
  if (process.cwd().includes("reportScript")) {
    fs.copyFileSync("./bootstrap.min.css", `${reportDirectory}/bootstrap.min.css`);
  } else {
    fs.copyFileSync("src/reportScript/bootstrap.min.css", `${reportDirectory}/bootstrap.min.css`);
  }
  fs.writeFileSync(`${reportDirectory}/index.html`, reportContent);
  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log(
    "Execution finished. Check the report under the results folder"
  );
  console.log(reportDirectory)
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
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  return year + "-" + month + "-" + day;
}

function getDateString() {
  return new Date().toISOString()
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

    if (!fs.existsSync(`${oldVersionFolder}/${filename}`)) {
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

function fileInfoComponent(fileInfo, filename) {
  return `<div class="row mb-4">
    <div class="col-md-12">
      <h3>File: ${filename}</h3>
      <ul>
        <li>Is Same Dimensions: ${fileInfo.isSameDimensions}</li>
        <li>Dimension Difference: ${JSON.stringify(fileInfo.dimensionDifference)}</li>
        <li>Raw Mismatch Percentage: ${fileInfo.rawMisMatchPercentage}%</li>
        <li>Mismatch Percentage: ${fileInfo.misMatchPercentage}%</li>
        <li>Diff Bounds: ${JSON.stringify(fileInfo.diffBounds)}</li>
        <li>Analysis Time: ${fileInfo.analysisTime} ms</li>
      </ul>
    </div>
    <div class="col-md-4">
      <h5>Before</h5>
      <img class="img-fluid" src="./screenshots/before-${filename}" alt="Reference">
    </div>
    <div class="col-md-4">
      <h5>After</h5>
      <img class="img-fluid" src="./screenshots/after-${filename}" alt="Test">
    </div>
    <div class="col-md-4">
      <h5>Diff</h5>
      <img class="img-fluid" src="./screenshots/compare-${filename}" alt="Diff">
    </div>
  </div>`;
}

function createReport(datetime, resInfo) {
  return `
  <html>
      <head>
          <title> VRT Report </title>
          <link href="./bootstrap.min.css" rel="stylesheet">
      </head>
      <body>
        <div class="container">
          <h1 class="my-4">Report for
               <a href="${config.url}"> ${config.appName}</a>
          </h1>
          <p>Executed: ${datetime}</p>
          <div id="visualizer">
              ${Object.entries(resInfo)
      .map(([filename, fileInfo]) => fileInfoComponent(fileInfo, filename))
      .join("")}
          </div>
        </div>
      </body>
  </html>`;
}
(async () => console.log(await executeTest()))();