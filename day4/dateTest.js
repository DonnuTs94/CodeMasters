const { format, addDays } = require("date-fns")

const today = new Date()
const tommorow = addDays(today, 1)

const formattedToday = format(today, "dd/MM/yyyy")
const formattedTommorow = format(tommorow, "dd/MM/yyyy")

console.log(`hari ini: ${formattedToday}`)
console.log(`hari ini: ${formattedTommorow}`)
