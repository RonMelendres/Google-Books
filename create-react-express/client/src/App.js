import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";
// import Wrapper from "./components/Wrapper";
import Cards from "./components/Cards";

function App() {
    return (
        
            <div>
                <NavBar />
                <Jumbotron />
                <Form />
                <Cards>

                </Cards>
            </div>
        
    );
}
export default App;


// goes between card tags
/* <Switch>
    <Route exact path="/" component={Books} />
    <Route exact path="/books" component={Books} />
    <Route exact path="/books/:id" component={Detail} />
    <Route component={NoMatch} />
</Switch> */

// This file is meant to be the main render of the app page. Within each green tag section, is supposed to represent the file of the same name, and handle some of the render features. For example, between the Card tags, to display the title of the book, you would type something like title = {book.title}. This would repeat in a similar fasion for author, synopsis, and the book image. 

// Under NavBar, we need to activate the "Saved" link when in "Search" and vice versa. This will be done as a prop in the navbar file and connected within the navbar tag in this file.