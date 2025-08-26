import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "light";
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      <Flex
        position="fixed"
        top="1rem"
        right="1rem"
        bg="blackAlpha.200"
        rounded={"full"}
        p="4"
      >
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]}>
          <Link href="#home" passHref>
            <Button
              bg={"#D2EBE9"}
              size="md"
              fontWeight="semibold"
              ml="30"
              mr="15"
              color="#321F28"
              rounded="full"
            >
              Home
            </Button>
          </Link>

          <Link href="#about" passHref>
            <Button
              bg={"#D2EBE9"}
              size="md"
              fontWeight="semibold"
              ml="30"
              mr="15"
              color="#321F28"
              rounded="full"
            >
              About
            </Button>
          </Link>

          <Link href="#projects" passHref>
            <Button
              bg={"#D2EBE9"}
              size="md"
              fontWeight="semibold"
              ml="30"
              mr="15"
              color="#321F28"
              rounded="full"
            >
              Projects
            </Button>
          </Link>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
          mt={1}
          p={2}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="whiteAlpha.100"
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        zIndex={20}
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            bg={"whiteAlpha.100"}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Link href="#home" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              rounded={"full"}
              bg={"#D2EBE9"}
              size="md"
            >
              Home
            </Button>
          </Link>

          <Link href="#about" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
              rounded={"full"}
              bg={"#D2EBE9"}
              size="md"
            >
              About
            </Button>
          </Link>

          <Link href="#projects" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
              rounded={"full"}
              bg={"#D2EBE9"}
              size="md"
            >
              Projects
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
