import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Stack, Flex, Text, Box } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/react";
import "@fontsource/reem-kufi";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "light";

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Stack>
      <Flex direction={isNotSmallerScreen ? "row" : "column"}>
        <Box p="36" mt="12" mr="500">
          <Text mt="8" fontSize="5xl" fontFamily="Reem Kufi, sans-serif">
            Hello im
            <br />
            <Text fontWeight="semibold" fontSize="5xl">
              Khofifah Adelia
            </Text>
          </Text>
          <Text fontSize="2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            risus lacus. Suspendisse dictum bibendum orci eget consequat.
            <br />
            Aenean rhoncus ligula sed auctor vestibulum. Suspendisse rhoncus
            porta convallis.
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
};

export default Header;
