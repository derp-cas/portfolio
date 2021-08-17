import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Aboutme from "./Aboutme";

function Main() {
    return (
        <StyledMain>
            <Hero />
            <Aboutme />
        </StyledMain>
    );
}

const StyledMain = styled.div`
    margin-left: 150px;
`;

export default Main;
