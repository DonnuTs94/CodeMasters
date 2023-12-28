import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, setCount } from "./store/rtkCounter"

const RtkCounter = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(setCount())}>reset</button>
      <button onClick={() => dispatch(increment(5))}>up5</button>
      <button onClick={() => dispatch(decrement(5))}>down5</button>
    </div>
  )
}

export default RtkCounter
