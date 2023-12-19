import { BrowserRouter, Routes, Route } from "react-router-dom"
import Todo from "./components/Todos"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Books from "./pages/Books"
import BooksDetail from "./pages/BooksDetail"
import About from "./pages/About"

const RouteReactBasic = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BooksDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteReactBasic
