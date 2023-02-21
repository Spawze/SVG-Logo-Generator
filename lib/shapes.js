class Shape {
    constructor(text, textColor, color) {
        this.text = text
        this.textColor = textColor
        this.color = color
    }
}

class Circle extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }
    render() {
        return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`)
    }
}
class Square extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }
    render(){
        return(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y = "0" width="150" height="150" fill="${this.color}"/>
    <text x="125" y="90" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`)
    }
}
class Triangle extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, color)

    }
    render() {
        return(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon fill="${this.color} "points="25,175 150,0 275,175" />
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`)
    }
}
module.exports = { Circle, Square, Triangle }