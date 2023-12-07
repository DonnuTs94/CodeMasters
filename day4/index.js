const fs = require("fs")
const greet = require("./myModule")

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) throw err
  //   {
  //     console.log(`Message : ${err}`)
  //   }
  console.log(data)
})

console.log(greet("fak"))
