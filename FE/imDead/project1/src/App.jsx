import { Box } from "@chakra-ui/react"
import AllBooks from "./components/AllBooks"
import BooksList from "./components/BooksList"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Box>
        <Navbar />
        <AllBooks />
        <BooksList />
      </Box>
    </>
  )
}

export default App
