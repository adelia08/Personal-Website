import React from "react";
import { Flex, Text, Box } from "@chakra-ui/layout";
import "@fontsource/reem-kufi";

const Header = () => {

  return (

    <section id="home">
      <Flex
        w="100%"
        maxW="100%"
        justifyContent="left"
        alignItems="left"
        py={{ base: '12', md: '20', lg: '36' }}
        px={{ base: '4', md: '8', lg: '20' }}
      >
        <Box justifyContent="left"
          alignItems="left" px={{ base: '8', md: '20', lg: '36' }} py={{ base: '8', md: '20', lg: '36' }} ml={{ base: '10', md: '20', lg: '36' }}
        >
          <Text
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontFamily="Reem Kufi, sans-serif"
            textAlign={"justify"}
            mx={{ base: '4', md: '2', lg: '0' }}
            ml={{ base: '-8', md: '2', lg: '0' }}
          >
            Hello, I'm
            <br />
            <Text
              fontWeight="semibold"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            >
              Khofifah Adelia
            </Text>
            <Text
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontFamily="Reem Kufi, sans-serif"
              mb="4"
            >
              I'm a developer, crafting solutions through code, design, and systems thinking. This is my personal website for project documentation that I
              will make in the future. So pleasure if you want to connect
              with me!✌
            </Text>
          </Text>
        </Box>
      </Flex>
    </section >

  );
};

export default Header;
