import React from "react";
import styled from "styled-components";
import background from "../assets/proback.png";
import exquid from "../assets/LogoVec.svg";
import iwo from "../assets/iwofurniture.png";

function Projects() {
    return (
        <StyledProject style={{ backgroundImage: `url(${background})` }}>
            <h2>"Projects"</h2>
            <div className="container">
                <div className="Projects">
                    <img src={exquid} alt="Exquid-Furniture" id="exquid" />
                    <img src={iwo} alt="Iwo-Furniture" />
                </div>
            </div>
        </StyledProject>
    );
}

const StyledProject = styled.div`
    width: 100%;
    height: 100vh;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

    h2 {
        margin-left: 10%;
        padding-top: 5%;
    }

    .container {
        max-width: 80%;
        margin-left: 10%;
        display: flex;
        flex-direction: column;
        padding-top: 5%;

        .Projects {
            width: 100%;
            display: grid;
            grid-template-columns: 15% 15% 15% 15%;
            grid-row-gap: 2em;
            grid-column-gap: 10%;
            justify-items: center;
            align-items: center;
            position: relative;
            margin-top: 10%;
            margin-bottom: 10%;

            #exquid {
                background: #a1a1a197;
            }
            img {
                max-width: 80%;
                transition: 600ms;
                transition-delay: 100ms;
            }
            img:hover {
                cursor: pointer;
                max-width: 120%;
                padding: 10px;
                box-shadow: 0 0 30px 3px #ff4a4a, inset 0 0 30px 3px #ff4a4a;
                border-radius: 10px;
            }
            img::after {
                content: "";
                background: red;
                display: block;
                width: 10px;
                height: 10px;
            }
        }
    }
    .container::before {
        margin-bottom: 15px;
        content: "<p>";
        display: block;
        font-family: Nothing You Could Do;
        font-style: normal;
        font-weight: normal;
        color: rgba(255, 255, 255, 0.5);
        font-size: clamp(16px, 1.5vw, 30px);
        letter-spacing: 0.1em;
    }

    .container::after {
        margin-bottom: 15px;
        content: "<p>";
        display: block;
        font-family: Nothing You Could Do;
        font-style: normal;
        font-weight: normal;
        color: rgba(255, 255, 255, 0.5);
        font-size: clamp(16px, 1.5vw, 30px);
        letter-spacing: 0.1em;
    }
`;

export default Projects;
