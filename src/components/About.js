import React from "react";
import {
  Heading,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useMediaQuery } from "@chakra-ui/react";
import "./About.css";

const About = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  return (
    <Stack>
      <Flex direction={isNotSmallerScreen ? "row" : "column"}>
        <div>
          <div>
            <Box
              float="right"
              maxW={"420px"}
              w={"full"}
              bg={"whiteAlpha.100"}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Flex justify="center" mt={12}>
                <Image
                  w={"200px"}
                  h={"200px"}
                  rounded={"full"}
                  src={
                    "https://www.linkpicture.com/q/9c5f99acaab658b17495973b8f67cea7_1.jpg"
                  }
                  objectFit={"cover"}
                />
              </Flex>

              <Box p={6}>
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading
                    fontSize={"2xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                  >
                    Khofifah Adelia
                  </Heading>
                  <Text>Frontend Developer</Text>
                </Stack>

                <Stack direction={"row"} justify={"center"} spacing={6}>
                  <IconButton
                    icon={<FaGithub />}
                    isRound="true"
                    onClick={() => window.open("https://github.com/adelia08")}
                  />
                  <IconButton
                    icon={<FaLinkedin />}
                    isRound="true"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/khofifah-a-986794126/"
                      )
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
                    onClick={() => window.open("./About.js")}
                  />
                </Stack>
              </Box>
            </Box>
          </div>

          <div>
            <Text mt="8" fontSize="5xl" fontFamily="Reem Kufi, sans-serif">
              About Me
            </Text>
            <Text fontSize="xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy
              <br />
              eirmod tempor invidunt ut labore et dolore. <br /> magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo <br />
              duo dolores et ea rebum magna aliquyam erat, sed diam voluptua. At
              vero eos accusam et justo duo dolores et ea rebum.
            </Text>

            <Text mt="320" fontSize="5xl" fontFamily="Reem Kufi, sans-serif">
              Experience
            </Text>
            <Text fontSize="xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy
              <br />
              eirmod tempor invidunt ut labore et dolore. <br /> magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo <br />
              duo dolores et ea rebum magna aliquyam erat, sed diam voluptua. At
              vero eos accusam et justo duo dolores et ea rebum.
            </Text>
            <div class="timeline">
              <div class="outer">
                <div class="card">
                  <div class="info">
                    <h3 class="title">Title 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                  </div>
                </div>
                <div class="card">
                  <div class="info">
                    <h3 class="title">Title 2</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                  </div>
                </div>
                <div class="card">
                  <div class="info">
                    <h3 class="title">Title 3</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Flex>
    </Stack>
  );
};

export default About;
