import React, { Component, useRef, useEffect } from "react";
import styled from "styled-components";
import twitterlogo from "../assets/twitter-6.svg";
import githublogo from "../assets/github-icon.svg";
import { Link } from "react-scroll";

function NavBar() {
    return (
        <StyledNavBar>
            <div className="navBarTop">
                <a href="" className="logo">
                    <img src="https://picsum.photos/150/180" alt="" />
                    <span>
                        Kacper Drobnicki <br /> Web Developer
                    </span>
                </a>
            </div>
            <div className="buttons">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={200}
                >
                    Home
                </Link>
                <Link
                    activeClass="active"
                    to="aboutme"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={200}
                >
                    About me
                </Link>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={200}
                >
                    Skills
                </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={200}
                >
                    Projects
                </Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={200}
                >
                    Contact
                </Link>
            </div>
            <div className="socials">
                <a href="">{/* <img src={twitterlogo} alt="" /> */}</a>
                <a href="">{/* <img src={githublogo} alt="" /> */}</a>
            </div>
        </StyledNavBar>
    );
}

const StyledNavBar = styled.div`
    background-color: #252525;
    height: 100vh;
    width: 8vw;
    padding: 5px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    .navBarTop {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .buttons > .active {
        border-bottom: 5px solid red;
    }
    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;

        a {
            height: 80%;
            margin: 5px 2px 5px 2px;
            background-color: transparent;
            color: white;
            text-decoration: none;
            border: 2px solid #ff4a4a;
            padding: 8px;
            text-shadow: 0 0 0.8em #ff4a4a;
            box-shadow: inset 0 0 0.45em #ff4a4a, 0 0 0.45em #ff4a4a;
            transition: 300ms;
            transition-delay: 150ms;
        }
        a:hover,
        a:focus {
            cursor: pointer;
            background: #ff4a4a;
            color: black;
            transition: 600ms;
            transition-delay: 150ms;
            box-shadow: inset 0 0 0.45em #ff4a4a, 0 0 2.6em #ff4a4a;
        }
    }
    .logo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        text-decoration: none;
        color: white;
        p {
            margin: 5px;
            background-color: #323232;
        }
    }
    .socials {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
    }
`;

export default NavBar;
