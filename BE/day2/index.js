import express from "express"
import books from "./books.js"
import {} from "pug"

const app = express()
const port = 3000
app.use(express.json())

app.set("view engine", "pug")
app.set("views", "./views")

app.get("/profile", (req, res) => {
  res.render("profile", { name: "joe" })
})

app.get("/web/books", (req, res) => {
  res.render("books", { books })
})

app.use((req, res, next) => {
  console.log("Time", Date.now())
  next()
})

const loggerMiddleware = (req, res, next) => {
  console.log(`Permintaan ke ${req.method} ${req.url}`)
  next()
}
app.use(loggerMiddleware)

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" })
})

app.get("/books", (req, res) => {
  const query = req.query

  if (query.search) {
    const search = query.search.toLowerCase()
    const filteredBooks = books.filter((book) => {
      const title = book.title.toLowerCase()
      return title.includes(search)
    })
    res.json(filteredBooks)
    return
  }

  res.json(books)
})

app.get("/books/:id", (req, res) => {
  const bookId = Number(req.params.id)
  const book = books.find((book) => book.id === bookId)

  if (!book) {
    res.status(404).json({ message: "Book not found" })
    return
  }

  res.json(book)
})

app.post("/books", (req, res) => {
  try {
    // const book = req.body

    const newId = books.length + 1
    books.push({ id: newId, ...req.body })

    return res.json({
      data: books,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: error.message,
    })
  }
})

app.put("/books/:id", (req, res) => {
  try {
    let book = books.find((book) => book.id === req.params.id)

    book = [{ id: req.params.id, ...req.body }]

    return res.json({
      message: "Update Success",
      data: book,
    })
  } catch (err) {
    res.json({
      message: err.message,
    })
  }
})

app.delete("/books/:id", (req, res) => {
  try {
    let foundBookId = books.findIndex(
      (book) => book.id === parseInt(req.params.id)
    )
    // console.log(foundBookId)
    books.splice(foundBookId, 1)

    return res.json({
      message: "dor",
      data: foundBookId,
    })
  } catch (err) {
    res.json({
      message: err.message,
    })
  }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
