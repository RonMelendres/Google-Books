import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";
// import Wrapper from "./components/Wrapper";
import Cards from "./components/Cards";

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Jumbotron />
                <Form />
                <Cards>
                    <Switch>

                    </Switch>
                </Cards>
            </div>
        </Router>
    );
}
export default App;

// goes between switch
/* <Route exact path="/" component={Books} />
    <Route exact path="/books" component={Books} />
    <Route exact path="/books/:id" component={Detail} />
    <Route component={NoMatch} /> */

