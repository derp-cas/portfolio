import React from "react";
import styled from "styled-components";
import HtmlLogo from "../assets/html-1.svg";
import CssLogo from "../assets/css-3.svg";
import GitLogo from "../assets/git-icon.svg";
import JavaLogo from "../assets/java-14.svg";
import JavascriptLogo from "../assets/logo-javascript.svg";
import PythonLogo from "../assets/python-5.svg";
import ReactLogo from "../assets/react-2.svg";
import VSCodeLogo from "../assets/visual-studio-code-1.svg";

function Skills() {
    return (
        <StyledSkills id="skills">
            <div className="container">
                <h2>"Skills"</h2>
                <div className="logos">
                    <img src={HtmlLogo} alt="HTML" type="logo" />
                    <img src={CssLogo} alt="Css" type="logo" />
                    <img src={JavascriptLogo} alt="Javascript" type="logo" />
                    <img src={JavaLogo} alt="Java" type="logo" />
                    <img src={PythonLogo} alt="Python" type="logo" />
                    <img src={ReactLogo} alt="React" type="logo" />
                    <img src={GitLogo} alt="Git" type="logo" />
                    <img
                        src={VSCodeLogo}
                        alt="Visual Studio Code"
                        type="logo"
                    />
                </div>
            </div>
        </StyledSkills>
    );
}

const StyledSkills = styled.div`
    background-color: #28272b;
    color: white;
    /* 100vw-8vw(margin left in mainjs) */
    width: 92vw;
    min-height: 100vh;

    padding-top: 20px;

    .container {
        margin-left: 10%;
        max-width: 80%;

        .logos {
            display: grid;
            grid-template-columns: 20% 20% 20% 20%;
            grid-row-gap: 25%;
            grid-column-gap: 10%;
            justify-items: center;
            align-items: center;
            position: relative;
            margin-top: 10%;
            /* margin-bottom: 10%; */

            img[type="logo"] {
                max-width: 100px;
                transition: 600ms;
                transition-delay: 100ms;
            }
            img[type="logo"]:hover {
                cursor: pointer;
                max-width: 70%;
                padding: 10px;
                box-shadow: 0 0 30px 3px #ff4a4a, inset 0 0 30px 3px #ff4a4a;
                border-radius: 10px;
            }
            img[type="logo"]::after {
                content: "";
                background: red;
                display: block;
                width: 10px;
                height: 10px;
            }
        }
        .logos::before {
            position: absolute;
            left: 0;
            top: -45px;
            content: "<container>";
            font-family: Nothing You Could Do;
            font-style: normal;
            font-weight: normal;
            color: rgba(255, 255, 255, 0.5);
            font-size: clamp(16px, 1.5vw, 30px);
            letter-spacing: 0.1em;
        }

        .logos::after {
            position: absolute;
            left: 0;
            bottom: -45px;
            content: "</container>";
            font-family: Nothing You Could Do;
            font-style: normal;
            font-weight: normal;
            color: rgba(255, 255, 255, 0.5);
            font-size: clamp(16px, 1.5vw, 30px);
            letter-spacing: 0.1em;
        }
    }
`;

export default Skills;
