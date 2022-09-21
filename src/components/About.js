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
import "./About.css";
import { AiTwotoneFileText } from "react-icons/ai";
import { useState } from "react";
import "@fontsource/reem-kufi";

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
              >
                <Flex justify="center" mt={[8, 12]}>
                  <Image
                    w={["150px", "200px"]}
                    h={["150px", "200px"]}
                    rounded={"full"}
                    src={
                      "https://www.linkpicture.com/q/7c4c8fff-8a9e-414d-982d-a86b713363c9.jpg"
                    }
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
              <Box alignSelf="auto" px="20" py="36" mt={8} ml={[32, 22, 48]}>
                <Text fontSize="5xl" fontFamily="Reem Kufi, sans-serif">
                  About Me
                </Text>
                <Text fontSize="xl" fontFamily="Reem Kufi, sans-serif">
                  Kia Ora, you can call me adel, I am a design enthusiast. I
                  like to make a beautifully user interface and also user
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

              <div class="timeline">
                <div class="outer">
                  <div class="card">
                    <div class="info">
                      <h3 class="title">Internship UI/UX Designer</h3>
                      <h3 class="title">PT. Impact Byte Teknologi Edukasi</h3>
                      <h3 class="title">Aug 2021 - Dec 2021</h3>
                      <br />
                      <p>
                        Recreate the user interface for a website version of
                        Waste 4 Change by identify the problem using design
                        process steps.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="info">
                      <h3 class="title">Student Laboratory Assistant</h3>
                      <h3 class="title">
                        Lembaga Pengembangan Komputerisasi Universitas Gunadarma
                      </h3>
                      <h3 class="title">Oct 2020 - Aug 2022</h3>
                      <br />
                      <p>
                        Tutoring course and assessing the results of assignments
                        by the students.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="info">
                      <h3 class="title">Study Independent Frontend Engineer</h3>
                      <h3 class="title">PT Ruang Raya Indonesia</h3>
                      <h3 class="title">Feb 2022 - Jul 2022</h3>
                      <br />

                      <li>Build a website using React JS and Chakra UI</li>
                      <li>Use Jira as a management tools</li>
                      <li>Use DevOps tools Git,CI/CD</li>
                      <li>Deployed on Vercel</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Flex>
      </Stack>
    </section>
  );
};

export default About;
