import { Box, Button, Image, Text } from "@chakra-ui/react"
import { axiosInstance } from "../api"
import { useEffect, useState } from "react"

const HeroSection = () => {
  const [foundHighestRating, setFoundHighestRating] = useState([])
  const getDataBooks = async () => {
    try {
      const response = await axiosInstance.get("/books")
      const dataBooks = response.data.data

      const foundHighestRating = Math.max(
        ...dataBooks.map((books) => books.rating),
        0
      )

      const bookWithHighestRating = dataBooks.find(
        (book) => book.rating === foundHighestRating
      )
      setFoundHighestRating(bookWithHighestRating)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(foundHighestRating)

  useEffect(() => {
    getDataBooks()
  }, [])
  return (
    <>
      <Box
        bgColor="#F1F0FE"
        maxW="1241px"
        maxH="522px"
        margin="auto"
        display="flex"
        mt="170px"
        zIndex="0"
        marginX="100px"
        position="relative"
      >
        <Box maxW="50%" margin="auto" ml="71px">
          <Text color="#8170F2" fontSize="20px">
            MUST READ
          </Text>
          <Text fontSize="62px" fontWeight="600">
            {foundHighestRating.title}
          </Text>
          <Box display="flex" mt="16px" mb="30px">
            <Text fontSize="16px" mr="16px">
              {foundHighestRating.author ? foundHighestRating.author.name : ""}
            </Text>
            <Text>{foundHighestRating.rating}</Text>
          </Box>

          <Text fontSize="16px">{foundHighestRating.synopsis}</Text>

          <Box display="flex" mt="40px">
            <Button
              bgColor="#8170F2"
              _hover={{ bgColor: "#8170F2" }}
              variant="solid"
              color="white"
              h="50px"
              w="193px"
              mr="15px"
            >
              Read Book
            </Button>
            <Button
              color="#8170F2"
              colorScheme="#8170F2"
              h="50px"
              w="193px"
              variant="outline"
            >
              See All Recomendation
            </Button>
          </Box>
        </Box>
        <Box maxW="50%" margin="auto" mr="71px">
          <Image
            my="66px"
            src={foundHighestRating.image_url}
            maxW="408.45px"
            h="390px"
          />
        </Box>
      </Box>
    </>
  )
}

export default HeroSection
