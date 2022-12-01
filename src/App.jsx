import "./App.css";
import { VStack, Text} from "@chakra-ui/layout";
import Header from "./components/Header";
import { Gradient } from "./components/GradientBgCanvas/Gradient.js";
import { useEffect} from "react";
import { ProjectsCard } from './components/Projects/ProjectsCard';
import projectsData from './components/Data/projectsData';
import About from "./components/About"
import "./components/Timeline/TimelineCard.css";
import timelineData from "./components/Data/timelineData"
import TimelineCard from "./components/Timeline/TimelineCard";
import { Layout } from 'antd';
import React from 'react';
import NavBar from "./components/NavBar";
const { Footer } = Layout;


function App() {
  //GRADIENT BG
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
}, []);

  return (
    <VStack >
      <canvas id="gradient-canvas" data-transition-in/>
      <NavBar/>
      <Header/>
      <About/>
      {timelineData.map((timelineData) => (
        <TimelineCard
          key={timelineData.id}
          job={timelineData.job}
          date={timelineData.date}
          description={timelineData.description}
        />
      ))}
  
      <Text
        py="12"
        mt={["8", "36", "100"]}
        ml={["24", "28", "28"]}
        fontSize="5xl"
        fontFamily="Reem Kufi, sans-serif"
      >
        My Projects
      </Text>
      <div className='App'>
      {projectsData.map((projectsData) => ( 
        <ProjectsCard
          key={projectsData.id}
          title={projectsData.title}
          description={projectsData.description}
          url={projectsData.url}
      />
    ))}
    </div>
      <Layout>
        <hr />
      <Footer style={{color:"white", width:"100%",fontSize: "18px",textAlign: 'center',fontWeight:"bold", marginBottom:"36px", marginTop:"36px"}}>Khofifah Adelia ©2022 Made with Chakra UI</Footer>
      </Layout>
    </VStack>
  );
}

export default App;

//commit