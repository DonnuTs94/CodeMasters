const moneyFormat = (amount) => {
  return `Rp ${amount.toFixed(2)}`
}

const dateFormat = (date) => {
  return date.toDateString()
}

module.exports = {
  moneyFormat,
  dateFormat,
}
