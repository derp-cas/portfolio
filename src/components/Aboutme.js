import React from "react";
import styled from "styled-components";
import kacper from "../assets/TpBackground.png";

function Aboutme() {
    return (
        <StyledAboutme id="aboutme">
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
            <div className="pic">
                <img src={kacper} alt="" />
            </div>
        </StyledAboutme>
    );
}

const StyledAboutme = styled.div`
    background-color: #28272b;
    color: white;
    /* 100vw-8vw(margin left in mainjs) */
    width: 92vw;
    display: flex;
    padding-top: 20px;
    justify-content: space-between;

    .text {
        max-width: 35%;
        min-width: 300px;
        max-height: 100%;
        margin-left: 10%;
        box-sizing: border-box;
    }
    p {
        margin-top: 20%;
        line-height: 1.6;
        letter-spacing: 1px;
    }
    .pic {
        /* background-color: tomato; */
        max-width: 50vw;

        img {
            max-width: 100%;
            min-width: 600px;
        }
    }
`;

export default Aboutme;
