// const isPrime = (n) => {
//   if (n <= 1) {
//     return false
//   }

//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       return false
//     }
//   }

//   return true
// }

// console.log(isPrime(2))

// =================================================================

// const addTwoNumber = (a, b) => {
//   return a + b
// }

// console.log(addTwoNumber(5, 3))

// =================================================================

// const evenOrOdd = (n) => {
//   if (n % 2 == 0) {
//     return "Genap"
//   }
//   return "ganjil"
// }

// console.log(evenOrOdd(3))

// =================================================================

// const names = ["Alice", "Bob", "Charlie", "David", "Eve"]

// console.log("List of namess:", names)

// names.push("Frank")
// console.log("After adding 'frank':", names)

// names.pop()
// console.log("After removing the last names:", names)

// const secondnames = names[1]
// console.log("The second names in the list is:", secondnames)

// const totalLength = names.length
// console.log("Numbe of names in the list:", totalLength)

// =================================================================

// reverse String

const str = "hello world"
console.log(str.split("").reverse().join(""))

// Fibonacci

// const Fibonacci = (n) => {
//   let a = 0
//   let b = 1
//   let z

//   for (let i = 2; i < n; i++) {
//     z = a + b
//     a = b
//     b = z
//   }
//   return z
// }
// console.log("The result is", Fibonacci(7))

// ==========================================

// const genFibonacci = (length) => {
//   let fiboArr = [0, 1]
//   for (let i = 2; i < length; i++) {
//     fiboArr.push(fiboArr[i - 2] + fiboArr[i - 1])
//   }
//   return fiboArr
// }

// console.log(genFibonacci(8))

// Palindrome

// const palindrome = (str) => {
//   let rgx = /[^A-Za-z]/g
//   let lowCaseStr = str.toLowerCase().replace(rgx, "")
//   let reverseStr = lowCaseStr.split("").reverse().join("")

//   if (reverseStr === lowCaseStr) {
//     return true
//   }
//   return false
// }

// console.log(palindrome("A man, a plan, a canal, Panama"))
