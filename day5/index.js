class Circle {
  constructor(radius) {
    this.radius = radius
  }

  area() {
    return (Math.PI * this.radius * this.radius).toFixed(2)
  }
}

const circle1 = new Circle(5)
const circle2 = new Circle(8)

// console.log(circle1.area())
// console.log(circle2.area())

class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`${this.name} make a sound`)
  }
}

class Bird extends Animal {
  constructor(color, name) {
    super(name)
    this.color = color
  }

  speak() {
    console.log(`${this.name} chirps`)
  }

  getColor() {
    console.log(`${this.name} ${this.color}`)
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`)
  }
}

const dog = new Dog("buddy")
const tweety = new Bird("yellow", "Tweety")
// dog.speak()
tweety.speak()
console.log(tweety.getColor())
