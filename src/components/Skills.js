import React from "react";
import styled from "styled-components";
import HtmlLogo from "../assets/html-1.svg";
import CssLogo from "../assets/css-3.svg";
import GitLogo from "../assets/git.svg";
import JavaLogo from "../assets/java-4.svg";
import JavascriptLogo from "../assets/logo-javascript.svg";
import PythonLogo from "../assets/python-5.svg";
import ReactLogo from "../assets/react-2.svg";
import VSCodeLogo from "../assets/visual-studio-code-1.svg";

function Skills() {
    return (
        <StyledSkills>
            <div className="container">
                <h2>"Skills"</h2>
                <div className="logos">
                    <img src={HtmlLogo} alt="HTML" />
                    <img src={CssLogo} alt="Css" />
                    <img src={JavascriptLogo} alt="Javascript" />
                    <img src={JavaLogo} alt="Java" />
                    <img src={PythonLogo} alt="Python" />
                    <img src={ReactLogo} alt="React" />
                    <img src={GitLogo} alt="Git" />
                    <img src={VSCodeLogo} alt="Visual Studio Code" />
                </div>
            </div>
        </StyledSkills>
    );
}

const StyledSkills = styled.div`
    background-color: #28272b;
    color: white;
    width: 100%;
    height: 100vh;

    padding-top: 20px;

    .container {
        margin-left: 10%;
        max-width: 80%;
        flex-direction: row;

        .logos {
            width: 100%;
            display: grid;
            grid-template-columns: 20% 20% 20% 20%;
            grid-row-gap: 2em;
            grid-column-gap: 10%;
            justify-items: center;
            align-items: center;
            position: relative;
            margin-top: 10%;
            margin-bottom: 10%;
            img {
                max-width: 50%;
                transition: 600ms;
                transition-delay: 100ms;
            }
            img:hover {
                cursor: pointer;
                max-width: 70%;
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
`;

export default Skills;
