// import React from 'react'
import {
    Box,
    Text,
    Stack,
    Image,
    Spacer,
    Flex,
    Badge,
    Button,
  } from "@chakra-ui/react";
  import { useMediaQuery } from "@chakra-ui/react";
  const IMAGE =
  "https://www.linkpicture.com/q/9c5f99acaab658b17495973b8f67cea7_1.jpg";

export const ProjectsCard = (props) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  return (
    <div>
    {/* <Flex display="flex"direction={isNotSmallerScreen ? "row" : "column"}> */}
    <Box
    keys={props.id}
    w="300px"
    rounded="20px"
    overflow="hidden"
    mt="10"
    mr={500}
    bg="whiteAlpha.500"
    _hover={{
      transform: "scale(1.05)",
      transition: "all .2s ease-in-out",
    }}
  >
    <Image src={IMAGE} alt="Card Image" boxSize="300px"></Image>
    <Box p={5}>
      <Stack align="baseline">
        <Badge variant="solid" colorScheme="teal" px={3} py={1}>
          {props.title}
        </Badge>
      </Stack>
      <Stack align="center">
        <Text as="h2" fontWeight="normal" my={2}>
          {props.description}
        </Text>
      </Stack>
      <Flex>
        <Spacer />
        <Button variant="solid" colorScheme="teal" size="sm">
          <a src={props.url}></a>
          Preview
        </Button>
      </Flex>
    </Box>
  </Box>
  {/* </Flex> */}
  </div>
  );
}
