import express from "express"
import { dbBooks } from "../configs/dbRoute.js"

const route = express.Router()

// const db = dbBooks

route.post("/", (req, res) => {
  try {
    const { title, category, description, author, publisher, year } = req.body

    const query = `insert into books ( title,category, description, author, publisher, year) values (?, ?, ?, ?, ?, ?)`

    db.query(
      query,
      [title, category, description, author, publisher, year],
      (err, result) => {
        return res.json({
          data: result,
        })
      }
    )
  } catch (err) {
    console.log(err)
    return res.json({
      message: err.message,
    })
  }
})

route.get("/", (req, res) => {
  const query = "select * from books"
  db.execute(query, (err, result) => {
    return res.json(result)
  })
})

route.get("/:id", (req, res) => {
  const query = `select * from books where id =${req.params.id} `

  db.query(query, (err, result) => {
    return res.json(result[0])
  })
})

route.delete("/:id", (req, res) => {
  const query = `delete from books where id = ${req.params.id} `

  db.query(query, (err, result) => {
    return res.json({
      message: "PUTAAA",
    })
  })
})

export default route
