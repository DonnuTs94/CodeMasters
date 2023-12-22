import { useState } from "react"

function State() {
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState(null)
  const [status, setStatus] = useState("typing")
  if (status === "okey") {
    return <h1>You Right</h1>
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("send")
    try {
      await sumbitForm(answer)
      setStatus("okey")
    } catch (err) {
      setStatus("typing")
      setError(err)
    }
  }
  const handleTextAreaChange = (e) => {
    setAnswer(e.target.value)
  }
  return (
    <>
      <h2>City Quiz</h2>
      <p>balonku rasa apa</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextAreaChange}
          disabled={status === "send"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "send"}>
          send answer
        </button>
      </form>
      {error !== null && <p className="error">{error.message} </p>}
    </>
  )
}
function sumbitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shoudError = answer.toLowerCase() !== "pisang"
      if (shoudError) {
        reject(new Error("Salahh cokkk"))
      } else {
        resolve()
      }
    }, 1500)
  })
}
export default State
