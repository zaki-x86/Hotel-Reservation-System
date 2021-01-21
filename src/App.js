import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import { Switch, Route, Link } from "react-router-dom";

const App = () => {
   return (
      <>
         <Switch>
            <Route exact path="/rooms">
               <Rooms />
            </Route>
            <Route exact path="/single-room">
               <SingleRoom />
            </Route>
            <Route exact path="/">
               <Home />
            </Route>
         </Switch>
      </>
   );
};

export default App;
