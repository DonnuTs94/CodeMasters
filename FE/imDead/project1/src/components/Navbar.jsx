import { Box, Button, Icon, Image, Input, Text } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import logo from "../assets/Group 3.png"
import { Outlet } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <Box
        // maxW="1241px"
        position="fixed"
        display="flex"
        justifyContent="space-between"
        mx="auto"
        px="100px"
        w="100%"
        zIndex={1}
        bgColor="white"
        top="0"
        // marginX="100px"
      >
        <Box display="flex" alignItems="center" position="relative">
          <Box mr="-25px" w="100px" h="100px" mt="33px">
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
            margin="auto"
            mr="40px"
          >
            <Text
              _hover={{ borderBottom: "solid 1px", transition: "0.5s" }}
              mr="24px"
              cursor="pointer"
            >
              All
            </Text>
            <Text mr="24px">Latest</Text>
            <Text>Top Picks</Text>
          </Box>
          <Box
            w="402px"
            display="flex"
            flexShrink="0"
            position="relative"
            top="40px"
          >
            <Input
              h="50px"
              placeholder="Search by title or authors..."
              pl="50px"
              borderRadius="8px"
            />
            <Icon
              as={Search2Icon}
              lineHeight="normal"
              position="absolute"
              left={5}
              color="#A4A4A4"
              fontWeight="300"
              top="20px"
            />
          </Box>
          <Button
            h="50px"
            w="135px"
            textColor="#8170F2"
            colorScheme="#8170F2"
            rounded={8}
            variant="outline"
            fontSize="20px"
            ml="20px"
            mt="40px"
          >
            {" "}
            Edit
          </Button>
        </Box>
      </Box>
      <Outlet />
    </>
  )
}

export default Navbar
