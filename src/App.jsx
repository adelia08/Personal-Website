import "./App.css";
import { VStack} from "@chakra-ui/layout";
import Header from "./components/Header";
import { Gradient } from "./components/GradientBgCanvas/Gradient.js";
import { useEffect} from "react";
import Projects from "./components/Projects";
import About from "./components/About"
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
      <Projects/>
      <Layout>
        <hr />
      <Footer style={{color:"white", width:"100%",fontSize: "18px",textAlign: 'center',fontWeight:"normal", marginBottom:"56px", marginTop:"36px"}}>Khofifah Adelia ©2022 Made with Chakra UI</Footer>
      </Layout>
    </VStack>
  );
}

export default App;
