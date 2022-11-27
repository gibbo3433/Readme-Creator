// Packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// Array of questions for user input
const questions = [

    {
        type: "input",
        name: "title",
        message: "Enter your title for your ReadMe document:",
    },

    {
        type: "input",
        name: "title",
        message: "Enter your title for your ReadMe document",
    },

    {
        type: "input",
        name: "title",
        message: "Enter your title for your ReadMe document",
    },

    {
        type: "input",
        name: "title",
        message: "Enter your title for your ReadMe document",
    },

    {
        type: "input",
        name: "title",
        message: "Enter your title for your ReadMe document",
    },

    {
        type: "input",
        name: "title",
        message: "Enter your title for your ReadMe document",
    },

    {
        type: "input",
        name: "title",
        message: "Enter your title for your ReadMe document",
    },

    {
        type: "input",
        name: "title",
        message: "Enter your title for your ReadMe document",
    },

    {
        type: "input",
        name: "title",
        message: "Enter your title for your ReadMe document",
    },


];

// This will start the function to create the file
function writeToFile(fileName, data) {
    // This will write the data to the "./assets.ReadMe.md file"
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!'))
};

// This function will start the inquirer package to start asking the questions required to complete the ReadMe
function init() {
    inquirer
    // This will prompt the user the questions
    .prompt(questions)
    // This will then take the answers from the user and place it into the generateMarkdown function
    .then((data) => {
        const readMeAnswers = generateMarkdown(data);
        // Then the data is sent to the writeTofile function to create the ReadMe file of the users answers
        writeToFile("./assets/ReadMe.md", readMeAnswers)
    });
};

// Function call to initialize app
init();