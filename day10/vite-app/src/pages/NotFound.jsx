import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="bg-slate-200 max-w-2xl mx-auto my-4 p-4 rounded">
      <h1 className="text-xl mb-2 font-semibold">404 Not Found</h1>
      <p>Nothing to see here, move along</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
