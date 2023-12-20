import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <ul className="mt-4">
        <li className="mb-2">
          <Link to="admin/user" className="text-gray-400 hover:text-white">
            Users
          </Link>
        </li>
        <li className="mb-2">
          <Link to="admin-books" className="text-gray-400 hover:text-white">
            Books
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
