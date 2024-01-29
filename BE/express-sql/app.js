import express from "express"

import booksRoute from "./routes/booksRoute.js"
import ecomsRoute from "./routes/ecomsRoute.js"

import { dbBooks, dbEcomms, dbIndonesia } from "./configs/dbRoute.js"

// dbIndonesia
// const db = dbBooks
const db = dbEcomms

const app = express()
app.use(express.json())

db.connect((err) => {
  if (err) {
    throw err
  }
})

app.use("/books", booksRoute)
app.use("/ecoms", ecomsRoute)

app.get("/provinces", (req, res) => {
  try {
    db.query("select * from provinces limit 19", (err, rows) => {
      if (err) throw err
      return res.json({
        rows,
      })
    })
  } catch (err) {
    console.log(err)
    return res.json({
      message: err.message,
    })
  }
})

app.get("/provinces/:id/regencies", (req, res) => {
  try {
    db.query(
      `select regencies.name as regency_name, provinces.name as province_name from regencies join provinces on regencies.province_id = provinces.id  where regencies.province_id = ${req.params.id}`,
      (err, rows) => {
        if (err) throw err
        return res.json({
          rows,
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

app.get("/provinces/:id", (req, res) => {
  const id = req.params.id
  const query = `select * from provinces where id = ${id}`

  db.query(query, (err, rows) => {
    if (err) throw err

    if (rows.length === 0) {
      return res.status(404).json({ message: "Data not found" })
    }

    res.json(rows[0])
  })
})

app.post("/provinces", (req, res) => {
  const { id, name } = req.body

  if (!id || !name) {
    return res.status(400).json({ message: "id and name are required" })
  }

  const query = `insert into provinces (id, name) values (?, ?)`
  db.execute(query, [id, name], (err, result) => {
    if (err) {
      if ("ER_DUP_ENTRY" === err.code) {
        return res.status(400).json({ message: "Duplicate entry" })
      }
      throw err
    }

    res.json({ message: "Data has been inserted", id: result.insertId })
  })
})

const handleUpdate = (id, req, res) => {
  const { name } = req.body

  if (!name) {
    return res.status(400).json({ message: "name is required" })
  }

  const query = `update provinces set name = ? where id = ?`
  db.execute(query, [name, id], (err, result) => {
    if (err) throw err

    if (0 === result.affectedRows) {
      return res.status(404).json({ message: "Data not found" })
    }

    res.json({ message: "Data has been updated" })
  })
}

export default app
