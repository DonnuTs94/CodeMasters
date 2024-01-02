import { Box } from "@chakra-ui/react"
import AllBooks from "./components/AllBooks"
import BooksList from "./components/BooksList"

const App = () => {
  return (
    <>
      <Box>
        <AllBooks />
        <BooksList />
      </Box>
    </>
  )
}

export default App
