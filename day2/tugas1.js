// Soal 1

const firstName = "John"
const lastName = "Doe"

console.log(firstName, lastName)
console.log("=======================================================")

// Soal 2

const age = 30
console.log(typeof age)

const isStudent = true
console.log(typeof isStudent)
console.log("=======================================================")

// Soal 3

const num1 = 10
const num2 = 20

let sum = num1 + num2
console.log(sum)

let min = num1 - num2
console.log(min)

let multiplication = num1 * num2
console.log(multiplication)

let distribution = num1 / num2
console.log(distribution)

console.log("=======================================================")

// Soal 4

const umur = 18
if (umur >= 18) {
  console.log("Anda sudah dewasa")
} else {
  console.log("Anda belum dewasa")
}

console.log("=======================================================")

// Soal 5

console.log("===================== For Loop ========================")
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

let i = 10
console.log("===================== While Loop ========================")
while (i > 0) {
  console.log(i)
  i--
}

let k = 1
console.log("===================== Do While ========================")
do {
  console.log(k)
  k++
} while (k <= 10)
console.log("=======================================================")

// Soal 6

const greed = (name) => {
  return name
}

console.log(greed("John"))

const calculatedArea = (width, height) => {
  return width * height
}

console.log(calculatedArea(10, 5))
console.log("=======================================================")

// Soal 7
const fruits = ["apple", "banana", "orange"]
// console.log(fruits[0])

fruits[1] = "grape"
fruits.push("mango")
// console.log(fruits)

for (let j = 0; j < fruits.length; j++) {
  console.log(fruits[j])
}
console.log("=======================================================")

// https://gist.github.com

// Soal 8

const person = {
  name: "John",
  age: 30,
  occupation: "jobless",
}

console.log(person.name)

console.log((person.age = 35))
console.log(person)

person.city = "Jakarta"
console.log(person)

for (x in person) {
  console.log(x)
}

console.log("=======================================================")
// Soal 9

class Product {
  constructor(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  getName() {
    return this.name
  }

  getPrice() {
    return this.price
  }

  getQuantity() {
    return this.quantity
  }

  totalPrice() {
    return this.price * this.quantity
  }
}

const product1 = new Product("Laptop", 1200, 3)

console.log("Nama Produk:", product1.getName())
console.log("Harga Produk:", product1.getPrice())
console.log("Kuantitas Produk:", product1.getQuantity())
console.log("Total Harga:", product1.totalPrice())
