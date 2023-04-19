// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseOption = `${data.license}`;
  if (licenseOption === "Apache") {
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseOption = `${data.license}`;
  if (licenseOption === "Apache") {
    licenseLink = "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//if this doesnt work, change "data" to "usage, credit, license, etc"
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${description}

  ##Installation
  ${installation}

  ##Usage
  ${usage}

  #Credits
  ${credit}

  ##License
  ${license}

  ##Badges
`;
}

module.exports = generateMarkdown;
