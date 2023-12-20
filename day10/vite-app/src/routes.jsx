/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom"
import Todo from "./components/Todos"
import Home from "./pages/Home"
import Books from "./pages/Books"
import BooksDetail from "./pages/BooksDetail"
import About from "./pages/About"
import Login from "./pages/Login"
import AppLayout from "./layout/appLayout"
import PlainLayout from "./layout/PlainLayout"
import AdminLayout from "./layout/AdminLayout"
import Dashboard from "./admin/Dashboard"
import AdminUser from "./admin/AdminUser"
import AdminBooks from "./admin/AdminBooks"

// const RouteReactBasic = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" index element={<Home />} />
//         <Route path="/todo" element={<Todo />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/books" element={<Books />} />
//         <Route path="/books/:id" element={<BooksDetail />} />
//         <Route path="*" element={<NotFound />} />
//         <Route path="404" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", Component: Home },
      { path: "about", Component: About },
      { path: "todo", Component: Todo },
      {
        path: "books",
        children: [
          { path: "", Component: Books },
          { path: ":id", Component: BooksDetail },
        ],
      },
    ],
  },
  {
    path: "/auth",
    Component: PlainLayout,
    children: [{ path: "", Component: Login }],
  },
  {
    path: "/admin",
    Component: Dashboard,
    children: [
      { path: "users", Component: AdminUser },
      { path: "books", Component: AdminBooks },
    ],
  },
])

// export default RouteReactBasic
export default router
