const fs = require('fs')
const inquirer = require('inquirer')
const { Circle, Square, Triangle } = require("./lib/shapes.js")
const validateColor = require('./lib/validateColor.js')
const outputFile = './output/logo.svg'
const questions = [
    {
        type: "list",
        message: "Choose your shape:",
        name: "shape",
        choices: ['Circle', 'Square', 'Triangle'],
        // filter(answer){return answer.toLowercase()},
    },
    {
        type: "input",
        message: "Enter 3 or less characters that will appear on the SVG:",
        name: "text",
        validate: (answer) => {
            if (answer.length <= 3) {
                return true
            }
            return "Please make sure you enter 3 or less characters."
        }
    },
    {
        type: "input",
        message: "Enter a color or a hex number for the background color of the shape:",
        name: "bgColor",
        validate: (answer) => validateColor(answer)
    }, {
        type: "input",
        message: "Enter a color or a hex number for the color of the text:",
        name: "textColor",
        validate: (answer) => validateColor(answer)
    },
]




function generateSVG(answer) {
    let svg;
    switch (answer.shape) {
        case "Circle":
            svg = new Circle(answer.text, answer.textColor, answer.bgColor)
            break;
        case "Square":
            svg = new Square(answer.text, answer.textColor, answer.bgColor)
            break;
        case "Triangle":
            svg = new Triangle(answer.text, answer.textColor, answer.bgColor)
            break;
    }
    fs.writeFile(outputFile, svg.render(), err => {
        if (err) { console.log("Something went wrong :(") }
        else { console.log("Generated logo.svg in the output folder.") }
    })
}

function init() {
    inquirer.prompt(questions)
        .then((answer) => {
            generateSVG(answer)
        })
}

init()