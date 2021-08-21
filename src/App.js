import NavBar from "./components/NavBar";
import styled from "styled-components";
import Main from "./components/Main";

function App() {
    return (
        <StyledApp>
            <NavBar />
            <Main />
        </StyledApp>
    );
}

const StyledApp = styled.div`
    display: flex;
    /* @media (max-width: 768px) {
        display: block;
    } */
`;

export default App;
