import "./App.css";
import { VStack, Text, Flex } from "@chakra-ui/layout";
import Header from "./components/Header";
import { Gradient } from "./components/GradientBgCanvas/Gradient.js";
import { useEffect } from "react";
import { ProjectsCard } from './components/Projects/ProjectsCard';
import projectsData from './components/Data/projectsData';
import About from "./components/About"
import timelineData from "./components/Data/timelineData"
import TimelineCard from "./components/Timeline/TimelineCard";
import { Layout } from 'antd';
import React from 'react';
import NavBar from "./components/NavBar";
import Sertification from "./components/Sertification/Sertification";
import sertificationData from './components/Data/sertificationData';
const { Footer } = Layout;


function App() {
  //GRADIENT BG
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);


  return (
    <VStack minH="100vh" w="100vw" overflowX="hidden" spacing={0}>
      <canvas id="gradient-canvas" data-transition-in />

      <NavBar />
      <Header />
      <About />

      <Text
        py="12"
        mt={{ base: "8", md: "36", lg: "100" }}
        pl={{ base: "4", md: "8", lg: "16" }}
        alignSelf="flex-start"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontFamily="Reem Kufi, sans-serif"
      >
        Experience
      </Text>


      {
        timelineData.map((timelineData) => (
          <TimelineCard
            key={timelineData.id}
            job={timelineData.job}
            company={timelineData.company}
            date={timelineData.date}
            description={timelineData.description}
          />
        ))
      }

      <Text
        py="24"
        mt={{ base: "-2", md: "36", lg: "42" }}
        pl={{ base: "4", md: "8", lg: "16" }}
        alignSelf="flex-start"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontFamily="Reem Kufi, sans-serif"
      >
        Projects
      </Text>


      <Flex
        wrap="wrap"
        justify="center"
        align="flex-start"
        px={{ base: 12, md: 8, lg: 16 }}
        w="full"
        gap={{ base: 10, md: 6, lg: 8 }}
      >
        {projectsData.map((data) => (
          <ProjectsCard
            key={data.id}
            title={data.title}
            description={data.description}
            url={data.url}
          />
        ))}
      </Flex>


      <Text
        py="12"
        mt={{ base: "8", md: "36", lg: "42" }}
        pl={{ base: "4", md: "8", lg: "16" }}
        alignSelf="flex-start"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontFamily="Reem Kufi, sans-serif"
      >
        Sertification
      </Text>


      <div>
        <Sertification data={sertificationData} />
      </div>

      <Layout>
        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)', width: '100%', borderTopWidth: '1px' }} />
        <Footer style={{
          color: "pink",
          width: "100%",
          fontSize: "16px",
          textAlign: 'center',
          fontWeight: "bold",
          marginBottom: "36px",
          marginTop: "36px",
          backgroundColor: 'transparent',
          fontFamily: "Reem Kufi, sans-serif"
        }}>
          Khofifah Adelia ©2022 Made with Chakra UI
        </Footer>
      </Layout>

    </VStack >
  );
}

export default App;