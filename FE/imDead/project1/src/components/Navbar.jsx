import { Box, Button, Icon, Image, Input, Text } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import logo from "../assets/Group 3.png"

const Navbar = () => {
  return (
    <>
      <Box
        maxW="1241x" // Mengganti maxW menjadi 1440
        h="71.968px"
        position="relative"
        display="flex"
        justifyContent="space-between"
        mt="33px"
        mx="auto" // Menambahkan mx="auto" untuk memusatkan Navbar di tengah
        px="20px" // Menambahkan padding agar tidak terpotong di pinggir layar
      >
        <Box display="flex" alignItems="center">
          <Box mr="-25px" w="100px" h="100px">
            <Image src={logo} alt="logo" />
          </Box>
          <Box textAlign="start">
            <Text fontSize="41px" fontWeight="500" color="#1D1D1D">
              Bookoe
            </Text>
            <Text mt="-10px" ml="3px" fontSize="14px" fontWeight="300">
              Rekomendasi Bukumu
            </Text>
          </Box>
        </Box>
        <Box display="flex">
          <Box
            w="226px"
            h="30px"
            flexShrink="0"
            display="flex"
            textAlign="center"
            justifyContent="space-between"
            border="solid"
            ml="203px"
          >
            <Text mr="24px">All</Text>
            <Text mr="24px">Latest</Text>
            <Text>Top Picks</Text>
          </Box>
          <Box w="402px" display="flex" flexShrink="0" position="relative">
            <Input h="50px" borderRadius="8px" />
            <Icon
              as={Search2Icon}
              lineHeight="normal"
              position="absolute"
              left={5}
              bottom={9}
              color="#A4A4A4"
              fontWeight="300"
            />
            <Text
              color="#A4A4A4"
              fontSize="20px"
              fontWeight="300"
              display="inline"
              position="absolute"
              left={55}
              lineHeight="normal"
              bottom={8}
            >
              Search by title or authors...
            </Text>
          </Box>
          <Button
            h="50px"
            w="135px"
            textColor="#8170F2"
            colorScheme="#8170F2"
            rounded={8}
            variant="outline"
            fontSize="20px"
          >
            {" "}
            Edit
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
