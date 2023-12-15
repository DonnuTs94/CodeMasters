import { useState } from "react"
import Button from "../Components/Button"
import { Link } from "react-router-dom"
import { IoIosEyeOff, IoMdEye } from "react-icons/io"

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className="mt-20 border-blue-100 w-1/2 mx-auto p-4">
      <h1 className="text-4xl text-center mb-4">Sign In</h1>
      <div className="">
        <div className="mt-16 w-3/4 m-auto">
          <div className="block mb-2">Username</div>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            className="py-3 px-4 block w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />

          <div className="block mb-2 mt-10">Email</div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
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
            Already have account?{" "}
            <Link className="cursor-pointer text-blue-500" to="/auth">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
