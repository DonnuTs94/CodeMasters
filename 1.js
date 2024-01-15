// function userCreator(name, score) {
//   const newUser = Object.create(userFunctionStore)
//   newUser.name = name
//   newUser.score = score
//   return newUser
// }
// const userFunctionStore = {
//   increment: function () {
//     this.score++
//   },
//   login: function () {
//     console.log("Logged in")
//   },
// }
// const user1 = userCreator("Will", 3)
// const user2 = userCreator("Tim", 5)
// user1.increment()

// // console.log(user1)
// console.dir(user1)

// console.dir(userFunctionStore)

// const mul = (a, b = 2) => {
//   return a * b
// }

// console.log(mul(3))

// const a = {
//   a: "A",
//   b: "B",
// }

// console.log(a["a"])

// let num = [1, 2, 3, 4, 5]
// let [first, sedcon] = num
// console.log(sedcon)

var message1 = String.fromCharCode(74, 97, 118, 97, 83, 99, 114, 105, 112, 116)

console.log(message1)

const x = 5
const y = 3

if (x !== y) {
  console.log("Quantum code")
} else {
  console.log("try again")
}
