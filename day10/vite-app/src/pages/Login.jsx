import { IoMdEye, IoIosEyeOff } from "react-icons/io"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState({})

  const navigate = useNavigate()

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await import("../userLogin.json")
        setUser(response.default[0])
      } catch (err) {
        throw new Error("Error")
      }
    }

    return () => {
      checkUser()
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userName !== user.username || password !== user.password) {
      return toast.error("SALAH  COK!", {
        position: toast.POSITION.BOTTOM_CENTER,
      })
    }

    navigate("/admin")
  }

  return (
    <div className="mt-20 border-blue-100 w-1/2 mx-auto p-4">
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
          <button className="bg-green-500 mt-10 w-full"> Sign In</button>
          <div className="mt-5 text-lg">
            Dont have an account?{" "}
            <Link className="cursor-pointer text-blue-500" to="/*">
              Sign up
            </Link>
          </div>
        </div>
        <ToastContainer />
      </form>
    </div>
  )
}

export default Auth
