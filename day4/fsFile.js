const fs = require("fs")

const writeFs = fs.writeFileSync(
  "output.txt",
  "text yang akan di tulis",
  (err) => {
    if (err) throw err
    console.log("Berkas telah ditulis")
  }
)

const readFs = fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) throw err
  console.log(data)
})

const readdirFs = fs.readdir(".", (err, files) => {
  if (err) throw err
  console.log(files)
})

module.exports = {
  writeFs,
  readFs,
  readdirFs,
}
