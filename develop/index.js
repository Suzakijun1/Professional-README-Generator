// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
    type: "",
    message: "",
    name: "",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
