const fs = require('fs')
const inquirer = require('inquirer')
const { Circle, Square, Triangle } = require("./lib/shapes.js")

const questions = [
    {
    type: "list",
    message: "Choose your shape:",
    name: "shape",
    choices: ['Circle','Square','Triangle'],
    // filter(answer){return answer.toLowercase()},
},
{
    type: "input",
    message: "Enter the 3 characters that will appear on the SVG:",
    name: "text",
    validate: (answer) => {
        if (answer.length <= 3) {
            return true
        }
        return "Please make sure your answer is only 3 or less characters."
    }
},
{
    type: "input",
    message: "Enter a color or a hex number for the background color of the shape:",
    name: "bgColor",
    validate: (answer)=>validateColor(answer)
},{
    type: "input",
    message: "Enter a color or a hex number for the color of the text:",
    name: "textColor",
    validate: (answer)=>validateColor(answer)
},
]

//will make sure color is good
function validateColor(answer){
    let regEx = /^#([0-9a-f]{3}){1,2}$/i
    let validColors = ["black","silver","gray","grey","white","maroon","red","purple","fuchsia","green" ,"lime" ,"olive" ,"yellow" ,"navy" ,"blue" ,"teal" ,"aqua" ,"darkblue" ,"mediumblue" ,"darkgreen" ,"darkcyan" ,"deepskyblue" ,"darkturquoise" ,"mediumspringgreen" ,"springgreen" ,"cyan" ,"midnightblue" ,"dodgerblue" ,"lightseagreen" ,"forestgreen" ,"seagreen" ,"darkslategray" ,"darkslategrey" ,"limegreen" ,"mediumseagreen" ,"turquoise" ,"royalblue" ,"steelblue" ,"darkslateblue" ,"mediumturquoise" ,"indigo" ,"darkolivegreen" ,"cadetblue" ,"cornflowerblue" ,"rebeccapurple","mediumaquamarine" ,"dimgray" ,"dimgrey" ,"slateblue" ,"olivedrab" ,"slategray" ,"slategrey" ,"lightslategray" ,"lightslategrey" ,"mediumslateblue" ,"lawngreen" ,"chartreuse" ,"aquamarine" ,"skyblue" ,"lightskyblue" ,"blueviolet" ,"darkred" ,"darkmagenta" ,"saddlebrown" ,"darkseagreen" ,"lightgreen" ,"mediumpurple" ,"darkviolet" ,"palegreen" ,"darkorchid" ,"yellowgreen" ,"sienna" ,"brown" ,"darkgray" ,"darkgrey" ,"lightblue" ,"greenyellow" ,"paleturquoise" ,"lightsteelblue" ,"powderblue" ,"firebrick" ,"darkgoldenrod" ,"mediumorchid" ,"rosybrown" ,"darkkhaki" ,"mediumvioletred" ,"indianred" ,"peru" ,"chocolate" ,"tan" ,"lightgray" ,"lightgrey" ,"thistle" ,"orchid" ,"goldenrod" ,"palevioletred" ,"crimson" ,"gainsboro" ,"plum","burlywood","lightcyan","lavender","darksalmon","violet","palegoldenrod","lightcoral","khaki","aliceblue","honeydew","azure","sandybrown","wheat","beige","whitesmoke","mintcream","ghostwhite","salmon","antiquewhite","linen","lightgoldenrodyellow","oldlace","magenta","deeppink","orangered","tomato","hotpink","coral","darkorange","lightsalmon","orange","lightpink","pink","gold","peachpuff","navajowhite","moccasin","bisque","mistyrose","blanchedalmond","papayawhip","lavenderblush","seashell","cornsilk","lemonchiffon","floralwhite","snow","lightyellow","ivory" ]
    if (regEx.test(answer) || validColors.includes(answer)) {
        return true
    }
    return "Please make sure your answer a valid hex code or color."
}

inquirer.prompt(questions).then((answer)=>{
    generateSVG(answer)
})

function generateSVG(answer){
    let svg;
    switch (answer.shape) {
        case "Circle":
            svg = new Circle(answer.text,answer.textColor,answer.bgColor)
            break;
        case "Square":
            svg = new Square(answer.text,answer.textColor,answer.bgColor)
            break;
        case "Triangle":
            svg = new Triangle(answer.text,answer.textColor,answer.bgColor)
            break;
        default:
            console.log("this should never print")
            break;
    }
    console.log(svg.render())
    //TODO: use fs to write the render to the output file
}