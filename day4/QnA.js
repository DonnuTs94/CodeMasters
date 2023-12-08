const readline = require("readline")
const fs = require("fs")

const question = JSON.parse(fs.readFileSync("./QnA.json", "utf8"))

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const totalQuestions = question.length

let currentQuesstion = 0
let score = 0

const ask = () => {
  if (currentQuesstion < totalQuestions) {
    const questionObj = question[currentQuesstion]
    rl.question(questionObj.question + "\n", (userAnswer) => {
      if (
        userAnswer.trim().toLowerCase() === questionObj.answer.toLowerCase()
      ) {
        console.log("Correct! \n")
        score++
      } else {
        console.log(`Quiz  completed! Your score: ${score}/${totalQuestions}`)
      }

      currentQuesstion++
      ask()
    })
  } else {
    console.log(`Quiz completed! Your score: ${score}/ ${question.length}`)
    rl.close()
  }
}

console.log("Welcome to minim Quiz \n")
ask()
