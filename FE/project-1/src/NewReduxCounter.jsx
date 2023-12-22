/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

const NewReduxCounter = ({ initialValue }) => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: "SET_COUNTER", payload: initialValue })
  }, [dispatch, initialValue])

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>NAIK</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>TURUN</button>
    </>
  )
}

export default NewReduxCounter
