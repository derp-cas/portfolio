import React, { Component, useRef, useEffect } from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Projects from "./Projects";
import Contactme from "./Contactme";

function Main() {
    return (
        <StyledMain>
            <Hero />
            <Aboutme />
            <Skills />
            <Projects />
            <Contactme />
        </StyledMain>
    );
}

const StyledMain = styled.div`
    margin-left: 8vw;
`;

export default Main;
