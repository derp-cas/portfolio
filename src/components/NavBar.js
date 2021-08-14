import React from "react";
import styled from "styled-components";

function NavBar() {
    return (
        <StyledNavBar>
            <div className="navBarTop">
                <a href="" className="logo">
                    <img src="https://picsum.photos/150/180" alt="" />
                    <p>Kacper Drobnicki Web Developer</p>
                </a>
            </div>
            <div className="buttons">
                <a href="">Home</a>
                <a href="">About me</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </div>
            <div className="socials">
                <a href="">GIT</a>
                <a href="">TWIT</a>
            </div>
        </StyledNavBar>
    );
}

const StyledNavBar = styled.div`
    background-color: #252525;
    height: 100vh;
    width: 150px;
    max-width: 150px;
    min-width: 120px;
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
    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;

        a {
            margin: 2px;
            background-color: #323232;
            color: white;
            text-decoration: none;
            border: 1px solid black;
            padding: 8px;
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
