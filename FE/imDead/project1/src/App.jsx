import AllBooks from "./components/AllBooks"
import BooksList from "./components/BooksList"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AllBooks />
      <BooksList />
    </>
  )
}

export default App
