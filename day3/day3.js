// const outerFunc = () => {
//   const outerVar = "Im outer"

//   const innerFunc = () => {
//     const innerVar = "Im inner"
//     console.log(innerVar)
//     console.log(outerVar)
//   }
//   innerFunc()
// }

// outerFunc()

// ==================================================

const transactions = [
  { id: 1, category: "groceries", amount: 50 },
  { id: 2, category: "clothing", amount: 75 },
  { id: 3, category: "groceries", amount: 30 },
  { id: 4, category: "electronics", amount: 120 },
  { id: 5, category: "clothing", amount: 60 },
]

const result = transactions.reduce(
  (summary, transaction) => {
    // Calculate total amount
    summary.totalAmount += transaction.amount

    // Find the most expensive transaction
    if (transaction.amount > summary.mostExpensive.amount) {
      summary.mostExpensive = transaction
    }

    // Group transactions by category
    if (!summary.transactionsByCategory[transaction.category]) {
      summary.transactionsByCategory[transaction.category] = []
    }
    summary.transactionsByCategory[transaction.category].push(transaction)

    return summary
  },
  {
    totalAmount: 0,
    mostExpensive: { amount: -Infinity },
    transactionsByCategory: {},
  }
)

// console.log("Total Amount:", result.totalAmount)
// console.log("Most Expensive Transaction:", result.mostExpensive)
// console.log("Transactions by Category:", result.transactionsByCategory)

const cartItems = [
  { id: 1, nama: "Taco", price: 2.2, quantity: 2 },
  { id: 1, nama: "Banana", price: 3, quantity: 4 },
  { id: 1, nama: "Apple", price: 5, quantity: 5 },
  { id: 1, nama: "Pota", price: 7, quantity: 7 },
]

// cartItems.map((item) => {
//   console.log(item.price)
// })

const total = cartItems.reduce((total, item) => {
  return total + item.price * item.quantity
}, 0)

console.log(total, "total")
