// TODO: Include packages needed for this application
const inquirer = require("./utils/node_modules/inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");
const renderLicenseSection = require("./utils/renderLicense");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("please enter your repository title.");
        return false;
      }
    },
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
    name: "description",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your description.");
      }
    },
  },
  {
    type: "confirm",
    message: "Is there an installation process?",
    name: "confirmInstallation",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
    when: ({ confirmInstallation }) => {
      if (confirmInstallation) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "githubUser",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username.");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your email?",
    name: "emailInput",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your email.");
      }
    },
  },
  {
    type: "input",
    message: "Provide instructions on how to use your project",
    name: "usage",
  },
  {
    type: "input",
    message: "List your collaborators, if any.",
    name: "credit",
  },
  {
    type: "checkbox",
    message: "Please choose a license.",
    name: "license",
    choices: ["Apache", "MIT", "BSD", "Unlicense"],
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You must choose a license.");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      return console.log("There was an error:" + error);
    }
  });
}

const createReadMe = util.promisify(writeToFile);
// TODO: Create a function to initialize app
async function init() {
  try {
    const userAnswers = await inquirer.prompt(questions);
    console.log("The data is being processed", userAnswers);

    // userAnswers.license

    const currentMarkdown = generateMarkdown(userAnswers);
    console.log(currentMarkdown);
    userAnswers.renderLicenseSection = renderLicenseSection(
      userAnswers.license
    );

    await createReadMe("newREADME.md", currentMarkdown);
  } catch (error) {
    console.log("There was an error:" + error);
  }
}

// Function call to initialize app
init();
