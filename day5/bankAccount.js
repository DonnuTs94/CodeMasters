import { faker } from "@faker-js/faker"
import Transaction from "./transaction.js"
import { formatterCurrency } from "./helper.js"

export default class BankAccount {
  balance = 0
  transactions = []

  constructor(owner) {
    this.number = faker.finance.accountNumber()
    this.owner = owner
  }

  deposit(amount) {
    this.balance += amount
    this.transactions.push(new Transaction(this.number, amount))
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient balance")
    }

    this.balance -= amount
    this.transactions.push(new Transaction(this.number, -amount))
  }

  toString() {
    const balance = formatterCurrency(this.balance)
    return `A/N (${this.number}) - ${this.owner}: ${balance}`
  }

  getBalance() {
    return formatterCurrency(this.balance)
  }

  getTransactions() {
    return this.transactions
  }
}
