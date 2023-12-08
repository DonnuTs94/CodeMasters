// const person = {
//   name: "John",
//   age: 30,

//   //   greed: function () {
//   //     console.log(`Hello, my name is ${this.name}`)
//   //   },
//   //   greed: () => {
//   //     console.log(`Hello, my name is ${person.name}`)
//   //   },

//   greed() {
//     console.log(`Hello, my name is ${person.name}`)
//   },
// }

// console.log(person.greed())

class Person1 {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

const person13 = new Person1("John", 30)
