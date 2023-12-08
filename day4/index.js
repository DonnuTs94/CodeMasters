// const greet = require("./myModule")
// require("./fsFile")
// const testReadLine = require("./readlineFile")

// testReadLine.question()
// console.log(greet("fak"))

// const args = process.argv
// console.log("argumen berbasis perintah:")
// console.log(args)

// const greet = () => {
//   const args = process.argv
//   if (args.length > 2) {
//     console.log(`Hello, ${args[2]}`)
//   } else {
//     console.log("Hello, Node.js")
//   }
// }
// process.exit(0)

const { addNumbers, subtractNumbers } = require("./myMath")
const { dateFormat, moneyFormat } = require("./formatter")

// console.log(addNumbers(2, 10))
// console.log(subtractNumbers(4, 30))

console.log(moneyFormat(1000.2))
console.log(dateFormat(new Date()))
