import React from "react";
import styled from "styled-components";

function Contactme() {
    return (
        <StyledContactme>
            <div className="container">
                <h2>"Contact Me!"</h2>
                <form className="contact" autoComplete="off">
                    <label for="fname">Vorname</label>
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Reiner"
                    ></input>
                    <label for="lname">Nachname</label>
                    <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Zufall"
                    ></input>
                    <label for="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="reiner@zufall.de"
                    ></input>
                    <label for="country">Land</label>
                    <select id="country" name="country">
                        <option value="deutschland">Deutschland</option>
                        <option value="österreich">Österreich</option>
                        <option value="schweiz">Schweiz</option>
                        <option value="polen">Polen</option>
                    </select>
                    <label for="subject">Nachricht</label>
                    <textarea
                        id="subject"
                        name="subject"
                        placeholder="..."
                    ></textarea>
                    <input type="submit" value="Senden"></input>
                </form>
            </div>
        </StyledContactme>
    );
}

const StyledContactme = styled.div`
    background-color: #28272b;
    color: white;
    /* 100vw-8vw(margin left in mainjs) */
    width: 92vw;

    display: flex;
    align-items: left;
    flex-direction: column;

    .container {
        padding-top: 5%;
        max-width: 80%;
        margin-left: 10%;
        display: flex;
        flex-direction: column;
    }
    /* Style inputs with type="text", select elements and textareas */
    input[type="text"],
    select,
    textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
    }
    input[type="message"],
    textarea {
        width: 100%;
        height: 10vh;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: none;
    }

    input[type="submit"] {
        position: relative;
        background-color: transparent;
        padding: 12px 20px;
        border: #ff4a4a solid;
        font-weight: 700;
        color: white;
        text-shadow: 0 0 0.8em #ff4a4a;
        box-shadow: inset 0 0 0.45em #ff4a4a, 0 0 0.45em #ff4a4a;
        transition: 300ms;
        transition-delay: 300ms;
    }

    input[type="submit"]:hover,
    input[type="submit"]:focus {
        cursor: pointer;
        background: #ff4a4a;
        color: black;
        transition: 600ms;
        transition-delay: 300ms;
        box-shadow: inset 0 0 0.45em #ff4a4a, 0 0 2.6em #ff4a4a;
    }
`;

export default Contactme;
