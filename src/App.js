import "./App.css";
import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsMedium, BsSun, BsFillMoonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useColorMode } from "@chakra-ui/color-mode";

function App() {
  //===============================COLOR MODE
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    //==============================NAVBAR
    <VStack p="8">
      <Flex w="100%">
        <Heading
          size="md"
          fontWeight="semibold"
          ml="30"
          mr="15"
          color="#A6D1E6"
        >
          Home
        </Heading>
        <Heading
          size="md"
          fontWeight="semibold"
          ml="30"
          mr="15"
          color="#A6D1E6"
        >
          About me
        </Heading>
        <Heading
          size="md"
          fontWeight="semibold"
          ml="30"
          mr="15"
          color="#A6D1E6"
        >
          Projects
        </Heading>

        {/* ==================================ICON */}

        <Spacer />

        <IconButton
          ml="30"
          icon={isDark ? <BsSun /> : <BsFillMoonFill />}
          isRound="true"
          onClick={toggleColorMode}
        />

        <IconButton
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://github.com/adelia08")}
        />
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
            window.open("https://www.linkedin.com/in/khofifah-a-986794126/")
          }
        />
        <IconButton
          icon={<BsMedium />}
          isRound="true"
          onClick={() => window.open("https://medium.com/@adelia.8")}
        />
        <IconButton
          icon={<MdEmail />}
          isRound="true"
          onClick={() => window.open("")}
        />
      </Flex>
    </VStack>
  );
}

export default App;
