import React from "react";
import styled from "styled-components";
import kacper from "../assets/TpBackground.png";

function Aboutme() {
    return (
        <StyledAboutme>
            <div className="text">
                <h2>"About me"</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias voluptatum harum quam expedita quos dignissimos
                    eveniet, magni molestiae ullam modi delectus neque culpa
                    velit blanditiis, ut quidem sit dolorem consectetur,
                    eligendi voluptatem quod odit. Sequi quia alias ipsa
                    deleniti magnam molestiae nobis officia maxime praesentium
                    dolore eos veniam repellat, dignissimos reprehenderit
                    maiores nam odio error est, nisi laudantium facilis!
                    Provident expedita facere omnis quas aspernatur nemo commodi
                    vitae perferendis nam, cupiditate a, vero adipisci minus
                    aliquam deleniti soluta optio error itaque delectus quam
                    mollitia. Cupiditate architecto id culpa dolore!
                </p>
            </div>
            <div className="bild">
                <img src={kacper} alt="" />
            </div>
        </StyledAboutme>
    );
}

const StyledAboutme = styled.div`
    background-color: #28272b;
    color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: left;
    padding-top: 20px;

    .text {
        max-width: 35%;
        margin-left: 10%;
        display: flex;
        flex-direction: column;
        background-color: yellow;
    }
    p {
        margin-top: 20%;
    }

    img {
        max-width: 200px;
        max-height: 200px;
    }
    .bild {
    }
`;

export default Aboutme;
