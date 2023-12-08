export default class Bank {
  accounts = []

  constructor(name) {
    this.name = name
  }

  addAccount(account) {
    this.accounts.push(account)
  }

  getAccount(number) {
    return this.accounts.find((account) => account.number === number)
  }

  deleteAccount(number) {
    this.accounts = this.accounts.filter((account) => account.number !== number)
  }

  listAccounts() {
    return this.accounts
  }
}
