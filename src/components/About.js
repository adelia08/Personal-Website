import React from "react";
import {
  Heading,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useClipboard,
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useMediaQuery } from "@chakra-ui/react";
import { AiTwotoneFileText } from "react-icons/ai";
import { useState } from "react";
import "@fontsource/reem-kufi";
import profil from "../assets/profil.jpg";

const About = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  const onButtonClick = () => {
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };

  const toast = useToast();
  const [value] = useState("khofifahadelia08@gmail.com");
  const { onCopy } = useClipboard(value);

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Email Copied",
      variant: "subtle",
      status: "success",
      isClosable: true,
      duration: 3000,
    });
  };

  return (
    <section id="about">
      <Stack>
        <Flex direction={isNotSmallerScreen ? "row" : "column"}>
          <div>
            <div>
              <Box
                float="right"
                maxW={"420px"}
                w={["55%", "100%"]}
                bg={"whiteAlpha.100"}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
                mr={[24, 24, 56, 56]}
                ml={[24, 12, 24, 24]}
                _hover={{
                  transform: "scale(1.05)",
                  transition: "all .2s ease-in-out",
                }}
              >
                <Flex justify="center" mt={[8, 12]}>
                  <Image
                    w={["150px", "200px"]}
                    h={["150px", "200px"]}
                    rounded={"full"}
                    src={profil}
                    objectFit={"cover"}
                  />
                </Flex>

                <Box p={16} px={[16, 16, 24]} py={[12, 12]}>
                  <Stack spacing={0} align={"center"} mb={5}>
                    <Heading
                      fontSize={"2xl"}
                      fontWeight={500}
                      fontFamily={"body"}
                    >
                      Khofifah Adelia
                    </Heading>
                    <Text>Frontend Developer</Text>
                    <Text pt="8" fontSize={["lg", "lg"]}>
                      Get In Touch With Me
                    </Text>
                  </Stack>

                  <Stack direction={"row"} justify={"center"} spacing={[2, 6]}>
                    <Tooltip
                      label="Find me on Github"
                      bg="gray.300"
                      color="black"
                    >
                      <IconButton
                        icon={<FaGithub />}
                        isRound="true"
                        onClick={() =>
                          window.open("https://github.com/adelia08")
                        }
                      />
                    </Tooltip>

                    <Tooltip
                      label="Find me on Linkedin"
                      bg="gray.300"
                      color="black"
                    >
                      <IconButton
                        icon={<FaLinkedin />}
                        isRound="true"
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/in/khofifah-a-986794126/"
                          )
                        }
                      />
                    </Tooltip>

                    <Tooltip
                      label="Find me on Medium"
                      bg="gray.300"
                      color="black"
                    >
                      <IconButton
                        icon={<BsMedium />}
                        isRound="true"
                        onClick={() =>
                          window.open("https://medium.com/@adelia.8")
                        }
                      />
                    </Tooltip>
                    <Tooltip
                      label="Here my email, click to copy it"
                      bg="gray.300"
                      color="black"
                    >
                      <IconButton
                        icon={<MdEmail />}
                        isRound="true"
                        onClick={handleCopy}
                      />
                    </Tooltip>
                  </Stack>
                </Box>
              </Box>
            </div>

            <div>
              <Box alignSelf="auto" px="20" py="36" mt={4} ml={[20, 22, 48]}>
                <Text fontSize="5xl" fontFamily="Reem Kufi, sans-serif">
                  About Me
                </Text>
                <Text fontSize="xl" fontFamily="Reem Kufi, sans-serif">
                  Kia Ora, you can call me adel, I am a design enthusiast. I
                  like to make a beautiful user interface and also user
                  friendly. Currently i'm learning React JS to improve my skill
                  for build a website.
                </Text>
                <Tooltip
                  label="Here my resume, click to download it"
                  bg="gray.300"
                  color="black"
                >
                  <Button mt="12" onClick={onButtonClick}>
                    Resume
                    <AiTwotoneFileText />
                  </Button>
                </Tooltip>
              </Box>

              <Box ml={["32", "38", "48"]}>
                <Text
                  mt={["8", "36", "120"]}
                  fontSize="5xl"
                  fontFamily="Reem Kufi, sans-serif"
                >
                  Experience
                </Text>
                <Text fontSize="xl" fontFamily="Reem Kufi, sans-serif">
                  This is my previous experiences
                  <br />
                </Text>
              </Box>
            </div>
          </div>
        </Flex>
      </Stack>
    </section>
  );
};

export default About;
