import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Aboutme from "./Aboutme";
import Skills from "./Skills";

function Main() {
    return (
        <StyledMain>
            <Hero />
            <Aboutme />
            <Skills />
        </StyledMain>
    );
}

const StyledMain = styled.div`
    margin-left: 150px;
`;

export default Main;
