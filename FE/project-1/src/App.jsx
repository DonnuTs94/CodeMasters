/* eslint-disable no-unused-vars */
import Counter from "./Counter"
import NewReduxCounter from "./NewReduxCounter"
import Reducer from "./Reducer"
import RtkCounter from "./RtkCounter"
import State from "./State"

function App() {
  return (
    <div>
      {/* <h1>State</h1>
      <State />

      <br />
      <h1>Reducer</h1>
      <Reducer /> */}
      <br />
      <h1>Ini Counter BTW</h1>
      {/* <Counter /> */}
      {/* <NewReduxCounter initialValue={10} /> */}
      <RtkCounter />
    </div>
  )
}

export default App
