import { IoMdEye, IoIosEyeOff } from "react-icons/io"
import { useEffect, useState } from "react"
import Button from "../Components/Button"
import { Link } from "react-router-dom"

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [showData, setShowData] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    setShowData(false)
  }, [userName, password])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (userName === "" || password === "") {
      alert("INPUT COK")
    }

    if (userName.length > 0 && password.length > 0) {
      setShowData(true)
    }
  }
  return (
    <div className="mt-20 border-blue-100 w-1/2 mx-auto p-4">
      <div
        className={showData ? "block mb-3 p-3 bg-slate-100 rounded" : "hidden"}
      >
        <div>Name: {userName}</div>
        <div>Password: {"*".repeat(10)}</div>
      </div>
      <h1 className="text-4xl text-center mb-4">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-16 w-3/4 m-auto">
          <div className="block mb-2">Username</div>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            className="py-3 px-4 block w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />

          <div className="block mb-2 mt-10">Password</div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-3 px-4 block w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <div
              onClick={() => toggleShowPassword()}
              className="absolute top-4 right-5"
            >
              {" "}
              {showPassword ? <IoIosEyeOff /> : <IoMdEye />}
            </div>
          </div>
          <Button className="bg-green-500 mt-10 w-full"> Sign In</Button>
          <div className="mt-5 text-lg">
            Dont have an account?{" "}
            <Link className="cursor-pointer text-blue-500" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Auth
