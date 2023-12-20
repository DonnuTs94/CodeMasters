import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <ul className="mt-4">
          <li className="mb-2">
            <Link to="users" className="text-gray-400 hover:text-white">
              Users
            </Link>
          </li>
          <li className="mb-2">
            <Link to="books" className="text-gray-400 hover:text-white">
              Books
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="text-red-500 hover:text-red-700">
              Logout
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
