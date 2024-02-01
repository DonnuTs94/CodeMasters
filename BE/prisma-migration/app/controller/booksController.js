import bcrypt, { hash } from "bcrypt"

const password = "password"
// bcrypt.hash(password, 15, (err, hash) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(hash)
// })

const hashPassword = bcrypt.hashSync(password, 10)

// console.log(hashPassword)

const passwordIsValid = bcrypt.compareSync("password1", hashPassword)

if (!passwordIsValid) {
  console.log("ERROR")
} else {
  console.log("Success")
}
