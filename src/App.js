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

const StyledApp = styled.div``;

export default App;
