import { useEffect, useState } from "react"

const AdminUser = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fecthUser = async () => {
      try {
        const response = await import("../userList.json")
        setUsers(response.default)
      } catch (err) {
        throw new Error()
      }
    }

    return () => {
      fecthUser()
    }
  }, [])

  console.log(users)

  return (
    <>
      <div>
        <div className="text-3xl text-center mb-4">User Data</div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b text-center">
                <td className="py-2 px-4">{user.username}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">
                  <button className="bg-red-500 text-white px-2 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminUser
