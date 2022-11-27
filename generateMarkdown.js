// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description

  ${data.description}

  ## Contents

  [Title]{#title}
  [Description]{#description}
  [Installation]{#installation}
  [Usage]{#usage}
  [Contributing]{#contributing}
  [Tests]{#tests}
  [Questions][#questions]

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## License

  ${data.tests}

  ## Questions

  If you have questions you want to ask about this project, please contact ${data.username}(https://github.com/${data.username})</br>
  OR, you can send an email to ${data.email}

`;
}

module.exports = generateMarkdown;
