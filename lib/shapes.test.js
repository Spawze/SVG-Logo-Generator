const { Circle, Square, Triangle } = require("./shapes.js")
const colorTest = require('./validateColor.js')
describe('Shapes', () => {
    describe("Circle", () => {
        it("Should create a red circle with white text that says 'LOL'", () => {
            const circle = new Circle('LOL', 'white', 'red')
            expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="red" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">LOL</text>
</svg>`)
        })
    })
    describe("Square", () => {
        it("Should make a green square with black text that says 'PAW'", () => {
            const square = new Square('PAW', 'black', 'green')
            expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y = "0" width="150" height="150" fill="green"/>
    <text x="125" y="90" font-size="60" text-anchor="middle" fill="black">PAW</text>
</svg>`)
        })
    })
    describe("Triangle", () => {
        it("Should make a pink triangle with yellow text that says '!!!'", () => {
            const triangle = new Triangle('!!!', '#ffff00', '#000')
            expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon fill="#000 "points="25,175 150,0 275,175" />
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="#ffff00">!!!</text>
</svg>`)
        })
    })
})

describe("Color",()=>{
    describe("Valid common color",()=>{
        it("should return true if a color is entered.",()=>{
            expect(colorTest("red")).toEqual(true)
        })
    })
    describe("Valid uncommon color",()=>{
        it("should return true even if an uncommon color is entered",()=>{
            expect(colorTest("chartreuse")).toEqual(true)
        })
    })
    describe("Gibberish fail",()=>{
        it("should return a string if an invalid color/gibberish is entered",()=>{
            expect(colorTest("blah blah blah blah")).toEqual("That is not a valid hex code or color.")
        })
    })
    describe("Valid 6 char hex code",()=>{
        it("Should return true if a six character hexadecimal code is entered",()=>{
            expect(colorTest("#f0f0f0")).toEqual(true)
        })
    })
    describe("Valid 3 char hex code",()=>{
        it("Should return true if a three character hexadecimal code is entered",()=>{
            expect(colorTest("#f50")).toEqual(true)
        })
    })
    describe("Invalid hex code",()=>{
        it("Should return a string if an invalid hex code is entered",()=>{
            expect(colorTest("#ffhmflo")).toEqual("That is not a valid hex code or color.")
        })
    })
})