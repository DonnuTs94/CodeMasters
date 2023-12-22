// Navbar.jsx
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-xl  font-bold">
            Home
          </Link>
          <div className="flex space-x-4">
            <Link to="/increment" className="text-white">
              Increment
            </Link>
            <Link to="/auth" className="text-white">
              Auth
            </Link>
            <Link to="/todo" className="text-white">
              Todo
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
