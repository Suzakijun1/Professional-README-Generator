// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (value === "Apache") {
//     return "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//   } else if (value === "MIT") {
//     return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//   } else if (value === "BSD") {
//     return "[![License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/license/bsd-3-clause/)";
//   } else if (value === "Unlicense") {
//     return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
//   }

// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let licenseOption = `${data.license}`;
//   if (licenseOption === "Apache") {
//     licenseLink = "";
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//if this doesnt work, change "data" to "usage, credit, license, etc"
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credit}

  ## License
  License used for this project - ${data.license}
  ${data.licenseBadge}

  ## Contact Information
  GitHub Username: ${data.githubUser}
  email: ${data.emailInput}
`;
}

module.exports = generateMarkdown;
