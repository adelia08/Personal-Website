import {
  Box,
  Text,
  Stack,
  Spacer,
  Flex,
  Badge,
  Button
} from "@chakra-ui/react";
import React from "react";

export const ProjectsCard = (props) => {
  return (
    <section id="projects">
      <Box
        keys={props.id}
        maxW="350px"
        w={{ base: "100%", md: "350px" }}
        rounded="20px"
        overflow="hidden"
        mx={{ base: "auto", md: 4 }}
        mb={{ base: 4, md: 0 }}
        bg="whiteAlpha.200"
        _hover={{
          transform: "scale(1.05)",
          transition: "all .2s ease-in-out",
        }}
      >
        <Box p={5} fontFamily="Reem Kufi, sans-serif">
          <Stack align="baseline">
            <Badge rounded="20px" variant="solid" bg={"#D2EBE9"} color="#321F28" px={3} py={1} fontFamily="Reem Kufi, sans-serif">
              {props.title}
            </Badge>
          </Stack>
          <Stack align="center">
            <Text as="h2" fontWeight="normal" my={2} fontFamily="Reem Kufi, sans-serif">
              {props.description}
            </Text>
          </Stack>
          <Flex>
            <Spacer />
            <Button rounded="20px" variant="solid" bg="#fecaca" color="#321F28" size="sm">

              <a
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "Reem Kufi, sans-serif", textDecoration: "none" }}
              >
                Preview
              </a>

            </Button>

          </Flex>
        </Box>

      </Box>
    </section >
  );
};