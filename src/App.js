// Route renders out component based on url
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import Main from "./components/Main";

function App() {
    return (
        <StyledApp>
            <Router>
                <NavBar />
                {/* <Route path="/skills" component={Skills}></Route> */}

                <Main />
            </Router>
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
