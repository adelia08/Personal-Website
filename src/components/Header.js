import React from "react";
import { Stack, Flex, Text, Box } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/react";
import "@fontsource/reem-kufi";

const Header = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <section id="home">
      <Stack>
        <Flex w="100%" maxWidth="100%">
          <Box
            alignSelf="auto"
            px="20"
            py="36"
            mt={8}
            ml={[28, 22, 48]}
            mr={[8, 22, 36]}
          >
            <Text fontSize="5xl" fontFamily="Reem Kufi, sans-serif">
              Hello, I'm
              <br />
              <Text fontWeight="semibold" fontSize="5xl">
                Khofifah Adelia
              </Text>
              <Text fontSize="2xl">
                I'm final year informatics student at Gunadarma University.
                <br />
                This is my personal website for project documentation that i
                will make in the forward. So pleasure if you want to connect
                with me!✌
              </Text>
            </Text>
          </Box>
        </Flex>
      </Stack>
    </section>
  );
};

export default Header;
