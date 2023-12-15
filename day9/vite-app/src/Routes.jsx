import { Route, Routes } from "react-router-dom"
import Increment from "./pages/Increment"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Register from "./pages/Register"

const ProjectRoutes = () => {
  return (
    <>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/increment" element={<Increment />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </main>
    </>
  )
}

export default ProjectRoutes
