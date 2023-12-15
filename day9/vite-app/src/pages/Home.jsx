import Button from "../Components/Button"
import Nama from "../Components/Name"

const Home = () => {
  const name = ["budi", "dibu", "didi"]

  return (
    <>
      <div className="">
        <h1 className="text-3xl text-center">Home</h1>
        <div>
          {name.map((item, i) => (
            <Nama className="text-red-400" key={i} name={item} />
          ))}
        </div>
        <Button variant="primary" name="Primary" />
        <Button variant="secondary" name="Secondary" />
      </div>
    </>
  )
}

export default Home
