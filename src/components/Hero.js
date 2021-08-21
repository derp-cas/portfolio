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

                <button type="button">Contact Me !</button>
            </div>
        </StyledHero>
    );
}

const StyledHero = styled.div`
    color: white;
    /* 100vw-8vw(margin left in mainjs) */
    width: 92vw;
    min-height: 100vh;
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

        button {
            max-width: 15%;
            min-width: 150px;
            margin-left: 5%;
        }
    }
`;

export default Hero;
