import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <main className="w-full py-5">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default AppLayout
