import { useState } from "react"
import Button from "../Components/Button"

const Increment = () => {
  const [counter, setCounter] = useState(0)

  const autoIncrement = () => {
    setCounter(counter + 1)
  }

  const reset = () => {
    setCounter(0)
  }

  const decrease = () => {
    setCounter(counter - 1)

    if (counter <= 0) {
      setCounter(0)
    }
  }
  return (
    <>
      <div className="text-6xl text-center">Increment</div>
      <h1 className="text-4xl text-center mt-10">{counter}</h1>
      <div className="flex gap-5 justify-center mt-10 h-10">
        <Button className="bg-primary rounded-md w-52" onClick={autoIncrement}>
          Increase
        </Button>
        <Button className="bg-red-500 w-52 rounded-md" onClick={reset}>
          reset
        </Button>
        <Button className="bg-blue-500 w-52 rounded-md" onClick={decrease}>
          Decrease
        </Button>
      </div>
    </>
  )
}

export default Increment
