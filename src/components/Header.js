import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Stack, Flex, Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useMediaQuery } from "@chakra-ui/react";
import "@fontsource/reem-kufi";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Stack>
      <Flex direction={isNotSmallerScreen ? "row" : "column"}>
        <Box p="30" mt="30">
          <Text mt="8" fontSize="4xl" fontFamily="Reem Kufi, sans-serif">
            Hello im
            <br />
            <Text fontWeight="semibold" fontSize="5xl">
              Khofifah Adelia
            </Text>
          </Text>
          <Text fontSize="1xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            risus lacus.
            <br />
            Suspendisse dictum bibendum orci eget consequat.
            <br />
            Aenean rhoncus ligula sed auctor vestibulum. Suspendisse rhoncus
            porta convallis.
          </Text>
        </Box>
        <Image
          mt="31"
          src="https://www.linkpicture.com/q/9c5f99acaab658b17495973b8f67cea7_1.jpg"
          boxSize="300px"
          borderRadius="full"
        />
      </Flex>
    </Stack>
  );
};

export default Header;
