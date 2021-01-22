import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import { Switch, Route } from "react-router-dom";

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
