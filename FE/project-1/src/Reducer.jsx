import { useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ANSWER":
      return { ...state, answer: action.payload }
    case "SET_ERROR":
      return { ...state, error: action.payload }
    case "SET_STATUS":
      return { ...state, status: action.payload }
  }
}

const initialState = {
  answer: "",
  error: null,
  status: "typing",
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { answer, error, status } = state

  if (status === "okey") {
    return <h1>You Right</h1>
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: "SET_STATUS", payload: "submmiting" })
    try {
      await sumbitForm(answer)
      dispatch({ type: "SET_STATUS", payload: "okey" })
    } catch (err) {
      dispatch({ type: "SET_STATUS", payload: "typing" })
      dispatch({ type: "SET_ERROR", payload: err })
    }
  }
  const handleTextAreaChange = (e) => {
    dispatch({ type: "SET_ANSWER", payload: e.target.value })
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
export default Reducer
