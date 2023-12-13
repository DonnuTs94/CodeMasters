import Greeter from "./greeter"

let greeter = new Greeter("")

const app = document.getElementById("app")
app.innerHTML = greeter.sayHello()
