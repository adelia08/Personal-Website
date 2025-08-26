import { motion } from "framer-motion";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text
} from "@chakra-ui/react";

export default function TimelineCard(props) {
  return (
    <section id="experience">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >

        <Accordion allowMultiple defaultIndex={[0]}
          mx={{ base: '8', md: '20', lg: '22' }}
          fontSize={{ base: 'sm', md: 'sm', lg: 'md' }}
          fontFamily="Reem Kufi, sans-serif"
          textAlign={"justify"}
        >
          <AccordionItem key={props.id}>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                <Text fontWeight={"bold"}>{props.job} - {props.company} ({props.date})</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
            >
              <Box
                maxH={{ base: '800px', md: '420px', lg: '460px' }}
                w={{ base: '100%', md: '100%' }}
                px={{ base: '8', md: '10', lg: '12' }}
                py={{ base: '8', md: '8', lg: '10' }}
                bg={"whiteAlpha.200"}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
                _hover={{
                  transform: "scale(1.05)",
                  transition: "all .2s ease-in-out",
                }}
              >
                <div>
                  {props.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </motion.div >

    </section>
  );
}
