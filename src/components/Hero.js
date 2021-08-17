import React from "react";
import styled from "styled-components";
import background from "../assets/landingpagebg.jpg";

function Hero() {
    return (
        <StyledHero style={{ backgroundImage: `url(${background})` }}>
            <div className="container">
                <h1>
                    Hi, ich bin Kacper Drobnicki,
                    <br />
                    Web Developer
                </h1>
                <a href="">
                    <button>Contact Me !</button>
                </a>
            </div>
        </StyledHero>
    );
}

const StyledHero = styled.div`
    color: white;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    background-size: cover;
    /* adds paralax effect to background image*/
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    /* ---------------------------------------*/

    .container {
        max-width: 80%;
        margin-left: 10%;
        display: flex;
        flex-direction: column;
    }
`;

export default Hero;
