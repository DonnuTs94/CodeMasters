import { Link } from "react-router-dom"

const Navbar = () => {
  const Links = [
    { name: "Todo", path: "/todo" },
    { name: "About", path: "/about" },
    { name: "Book", path: "/books" },
  ]

  return (
    <nav className="bg-cyan-600 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to={"/"} className="text-white text-lg font-semibold">
          React Basic
        </Link>
      </div>
      <div className="flex items-center">
        {Links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-white mr-4 hover:text-gray-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
