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
  const [value] = useState("khofifahadelia6501@gmail.com");
  const { onCopy } = useClipboard(value);

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Email Berhasil Disalin",
      variant: "subtle",
      status: "success",
      isClosable: true,
      duration: 3000,
    });
  };

  return (
    <section id="about">
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        py={{ base: '10', md: '16', lg: '24' }}
        px={{ base: '4', md: '8', lg: '12' }}
        wrap="wrap"
        gap={{ base: '8', md: '12' }}
      >

        <Box
          maxW={{ base: '380px', md: '420px', lg: '460px' }}
          w={{ base: '90%', md: 'auto' }}
          bg={"whiteAlpha.100"}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          _hover={{
            transform: "scale(1.05)",
            transition: "all .2s ease-in-out",
          }}
        >
          <Flex justify="center" mt={{ base: '6', md: '8' }}>
            <Image
              w={{ base: '120px', md: '180px', lg: '200px' }}
              h={{ base: '120px', md: '200px', lg: '220px' }}
              rounded={"full"}
              src={profil}
              objectFit={"cover"}
            />
          </Flex>

          <Box p={{ base: '8', md: '12' }} px={{ base: '8', md: '12', lg: '16' }} py={{ base: '6', md: '8' }}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight={500}
                fontFamily="Reem Kufi, sans-serif"
              >
                Khofifah Adelia
              </Heading>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontFamily="Reem Kufi, sans-serif">Website Developer</Text>
              <Text pt="8" fontSize={{ base: 'md', md: 'lg' }} fontFamily="Reem Kufi, sans-serif">
                Let's connect and collaborate!
              </Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={{ base: '2', md: '4' }}>
              <Tooltip
                label="find me on Github"
                bg="gray.300"
                color="black"
              >
                <IconButton
                  icon={<FaGithub />}
                  isRound="true"
                  onClick={() =>
                    window.open("https://github.com/adelia08", "_blank")
                  }
                />
              </Tooltip>

              <Tooltip
                label="find me on Linkedin"
                bg="gray.300"
                color="black"
              >
                <IconButton
                  icon={<FaLinkedin />}
                  isRound="true"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/khofifah-a-986794126/",
                      "_blank"
                    )
                  }
                />
              </Tooltip>

              <Tooltip
                label="find me on Medium"
                bg="gray.300"
                color="black"
              >
                <IconButton
                  icon={<BsMedium />}
                  isRound="true"
                  onClick={() =>
                    window.open("https://medium.com/@adelia.8", "_blank")
                  }
                />
              </Tooltip>
              <Tooltip
                label="click to copy my email"
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

        <Flex
          direction="column"
          alignItems={{ base: "center", md: "flex-end" }}
          flexGrow={1}
          maxW={{ base: '100%', md: '50%', lg: '60%' }}
        >

          <Box
            textAlign={{ base: "center", md: "left" }}
            mb={{ base: '8', md: '12' }}
            w="100%"
          >
            <Text
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontFamily="Reem Kufi, sans-serif"
              fontWeight="bold"
              mb="4"
            >
              About me
            </Text>
            <Text
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
              fontFamily="Reem Kufi, sans-serif"
              textAlign={"justify"}
              mx={{ base: '8', md: '2', lg: '0' }}
            >
              Kia Ora, you can call me adel, I’m a full-stack developer with 2+ years of experience in JavaScript, Laravel, and CodeIgniter, React.js, specializing in optimizing
              application flow and database architecture. Passionate about ensuring software quality through manual testing, I bridge the gap between
              technical solutions and business needs. Currently transitioning into Systems Analysis roles, I leverage my technical expertise and
              problem-solving skills to align solutions with business goals. I’m focused on delivering efficient, user-centric systems that enhance project
              outcomes and stakeholder satisfaction.
            </Text>
            <Tooltip
              label="click to download my resume"
              bg="gray.300"
              color="black"
            >
              <Button mt="8" onClick={onButtonClick} rightIcon={<AiTwotoneFileText />}>
                Resume
              </Button>
            </Tooltip>
          </Box>
        </Flex>
      </Flex>

    </section>
  );
};

export default About;
