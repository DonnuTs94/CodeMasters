/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

const NewReduxCounter = ({ initialValue }) => {
  const count = useSelector((state) => state.counter)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: "SET_COUNTER", payload: initialValue || 0 })
    dispatch({ type: "SET_USER", payload: { name: "Rizky" } })
  }, [dispatch, initialValue])

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        NAIK
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        TURUN
      </button>

      <br />

      <div>User: {user ? user.name : null}</div>
    </>
  )
}

export default NewReduxCounter
