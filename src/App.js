import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   withRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";

const App = () => {
   return (
      <>
         <Navbar />
         <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route path="/rooms">
               <Rooms />
            </Route>
            <Route path="/rooms/:id">
               <SingleRoom />
            </Route>
            <Route>
               <Error />
            </Route>
         </Switch>
      </>
   );
};

export default App;
