const http = require("http")
const url = require("url")
const books = require("./books.json")

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true)
  console.log(parsedUrl)

  const path = parsedUrl.pathname

  const id = Number(path.split("/").pop())
  console.log("id", id)

  const query = parsedUrl.query

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ message: "Hello world" }))
    return
  }

  if (path === "/books" && !id) {
    res.writeHead(200, { "Content-Type": "application/json" })

    if (Object.keys(query).length > 0) {
      const filteredBooks = books.filter((book) => {
        let matched = true
        matched =
          matched && book.title.toLowerCase().includes(query.q.toLowerCase())
        return matched
      })

      res.end(JSON.stringify(filteredBooks))
      return
    }

    res.end(JSON.stringify(books))
    return
  }

  if (path.includes("/books/") && id) {
    res.writeHead(200, { "Content-Type": "application/json" })
    const book = books.find((book) => book.id === id)
    "undefined" === typeof book
      ? res.end(JSON.stringify({ message: "Book not found" }))
      : res.end(JSON.stringify(book))
    return
  }

  res.writeHead(404, { "Content-Type": "application/json" })
  res.end(JSON.stringify({ message: "Page not found" }))
})

const port = 3000

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`)
})
