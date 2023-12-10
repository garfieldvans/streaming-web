import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Heading,
  Input,
  Button,
  Text,
  Image,
  InputGroup,
  InputRightElement,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
} from "@chakra-ui/react";
import { BiSearch, BiMenu } from "react-icons/bi";
import { GiBookshelf } from "react-icons/gi";
import { FiHome } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import NavItem from "./Navitem";

const LinkItems = [
  { name: "Home", pathname: "/", icon: FiHome },
  { name: "Hot", pathname: "/Hot", icon: FaFire },
  { name: "Genre", pathname: "/Genre", icon: GiBookshelf },
  { name: "News", pathname: "/News", icon: IoNewspaperOutline },
];

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box alignItems="center">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-evenly" }}
        align={{ base: "flex-start", md: "flex-start" }}
        p={3}
        bg="#0a0a0a"
        color="white"
        px="40px"
      >
        {/* Left Section - Logo */}
        <Flex display={{ base: "flex", md: "flex" }} >
          <Box
            display="flex"
            flexDirection="row"
            alignSelf="center"
            as="a"
            href="/"
            mb='20px'
            maxH='30px'
            fontSize='30px'
          >
            <Text fontWeight="700" color="aqua">
              Flex
            </Text>
            <Text fontWeight="700">Stream</Text>
          </Box>
          <Box display={{ base: "flex", md: "none" }} position='absolute' right={5} top={'15px'}>
            <IconButton
              icon={<BiMenu size='25px'/>}
              onClick={toggleDrawer}
              variant="ghost"
              color="white"
              size="md"
              aria-label="Toggle Menu"
            />
          </Box>
        </Flex>

        {/* Center Section - Navigation for Medium and Large Screens */}
        <Flex
          direction={{ base: "none", md: "row" }} // Hide on small screens
          gap="4px"
          display={{ base: "none", md: "flex" }}
        >
          {LinkItems.map((link) => (
            <NavItem
              key={link.name}
              // icon={link.icon}
              pathname={link.pathname}
            >
              {link.name}
            </NavItem>
          ))}
        </Flex>
        <Drawer isOpen={isDrawerOpen} placement="right" onClose={toggleDrawer}>
          <DrawerOverlay />
          <DrawerContent bgColor="tomato">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack spacing={3}>
                {/* Navigation Items for Small Screens */}
                {LinkItems.map((link) => (
                  <NavItem
                    key={link.name}
                    icon={link.icon}
                    pathname={link.pathname}
                  >
                    {link.name}
                  </NavItem>
                ))}

                <Box
                  as="a"
                  href="/profile"
                  color="white"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  mx='7'
                  mt='2'
                >
                  <FaRegCircleUser
                    fontSize="14"
                    _groupHover={{
                      color: "white",
                    }}
                  />
                  <Text ml='4'>Profile</Text>
                </Box>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Right Section - Search Input and Profile for Medium and Large Screens */}
        <Flex
          align={{ base: "center", md: "flex-start" }}
          gap="30px"
          alignSelf='center'
          justify={{ base: "center", md: "space-between" }}
          display={{ base: "contents", md: "flex" }} // Show on both small and large screens
          // mt="10px"
        >
          {/* Search Input */}
          <InputGroup>
            <Input
              borderRadius="10"
              borderWidth="0.1"
              borderColor="gray.600"
              bgColor="white.500"
              placeholder="Search"
              textColor="white"
              name="search"
              height="45px"
              _placeholder={{ opacity: 1, color: "black.900" }}
              
            />
            <InputRightElement>
              <BiSearch color="#C4C4C4" />
            </InputRightElement>
          </InputGroup>
        </Flex>

        {/* Profile Image */}

        <Box
          as="a"
          href="/profile"
          display={{ base: "none", md: "flex" }}
          alignSelf="center"
        >
          <Image
            src={window.location.origin + "/logo512.png"}
            borderRadius="full"
            boxSize="30%"
            maxWidth="15vh"
            maxHeight="15vh"
            bgColor="white"
          />
        </Box>

        {/* Mobile Menu Toggle Button */}

        {/* Mobile Drawer */}
      </Flex>
    </Box>
  );
};

export default Navbar;
