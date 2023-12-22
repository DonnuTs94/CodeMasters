/* eslint-disable react/prop-types */
import { useReducer } from "react"
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash,
} from "react-feather"

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state + 1
    case "decrease":
      return state - 1
    case "bigIn":
      return state + 10
    case "bigDec":
      return state - 10
    case "reset":
      return action.payload
    case "random":
      return Math.ceil(Math.random() * 100)
  }
}

function Counter({ initialVal = 0 }) {
  const [state, dispatch] = useReducer(reducer, initialVal)

  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">{state}</span>
      </p>
      <div className="button-row">
        <button onClick={() => dispatch({ type: "increase" })}>
          <ChevronUp />
        </button>
        <button onClick={() => dispatch({ type: "bigIn" })}>
          <ChevronsUp />
        </button>
        <button
          onClick={() => dispatch({ type: "reset", payload: initialVal })}
        >
          <RotateCcw />
        </button>
        <button
          onClick={() => {
            dispatch({ type: "random" })
          }}
        >
          <Hash />
        </button>
        <button onClick={() => dispatch({ type: "bigDec" })}>
          <ChevronsDown />
        </button>
        <button onClick={() => dispatch({ type: "decrease" })}>
          <ChevronDown />
        </button>
      </div>
    </div>
  )
}

export default Counter
