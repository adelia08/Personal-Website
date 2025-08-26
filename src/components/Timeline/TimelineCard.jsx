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
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >

      <Accordion allowMultiple defaultIndex={[0]}
        mx={{ base: '8', md: '2', lg: '0' }}
        fontSize={{ base: 'sm', md: 'md', lg: 'xl' }}
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
            <div>
              {props.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

    </motion.div >
  );
}
