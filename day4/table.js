const cliTable = require("cli-table3")
const fs = require("fs")

const jsonBook = JSON.parse(fs.readFileSync("./books.json", "utf8"))

let table = new cliTable({
  head: ["title ", "author", "publication year", "genre"],
})

jsonBook.books.map((book) => {
  table.push([book.title, book.author, book.publication_year, book.genre])
})

console.log(table.toString())
