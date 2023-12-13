export default class Greeter {
  constructor(name) {
    this.name = name || "Anonymous"
  }

  sayHello() {
    return `Hello ${this.name}`
  }
}
