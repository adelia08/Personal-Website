import "./App.css";
import { VStack, Flex, Spacer } from "@chakra-ui/layout";
import { IconButton,Button } from "@chakra-ui/button";

import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { useColorMode } from "@chakra-ui/color-mode";
import Header from "./components/Header";
import { Gradient } from "./components/GradientBgCanvas/Gradient.js";
import "./App.css";
import { useEffect} from "react";
import Projects from "./components/Projects";
import About from "./components/About"


function App() {
  //===============================COLOR MODE
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "light";

  //GRADIENT BG
  useEffect(() => {
    // Create your instance
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
}, []);

const handleOnClickHome =()=>{
    <a href="#About"></a>
}

  return (

 
    <VStack>
      <canvas id="gradient-canvas" data-transition-in/>
      <Flex w="100%" position={"fixed"}  p="8" mt="25" mr="12" ml="12">
        <Button
          colorScheme={'whiteAplha'}
          size="md"
          fontWeight="semibold"
          ml="30"
          mr="15"
          color="#A6D1E6"
          onClick={handleOnClickHome}>
          Home
        </Button>
        <Button
          colorScheme={'whiteAplha'}
          size="md"
          fontWeight="semibold"
          ml="30"
          mr="15"
          color="#A6D1E6"
          onClick={handleOnClickHome}
        >
          About me
        </Button>
        <Button
          colorScheme={'blackAplha'}
          size="md"
          fontWeight="semibold"
          ml="30"
          mr="15"
          color="#A6D1E6"
          onClick={handleOnClickHome}
        >
          Projects
        </Button>

        {/* ==================================ICON */}

        <Spacer />

        <IconButton
          ml="30"
          icon={isDark ? <BsSun /> : <BsFillMoonFill />}
          isRound="true"
          onClick={toggleColorMode}
        />

        
      </Flex>
      <Header/>
      <About/>
      <Projects/>
    </VStack>
    

  );
}

export default App;
