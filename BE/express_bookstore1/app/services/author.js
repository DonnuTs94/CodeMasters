import db from "../../configs/dbroute"

class Author {
  async get() {
    const [rows] = await db.query(`Select * from authors`)

    return rows
  }

  async find(id) {
    const [rows] = await db.query(`select * from authors where id =?`[id])
  }
}
