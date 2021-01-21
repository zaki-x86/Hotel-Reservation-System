import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
   return (
      <>
         <Navbar />
         <Router>
            <Switch>
               <Route exact path="/" children={<Home />}></Route>
               <Route exact path="/rooms" children={<Rooms />}></Route>
               <Route exact path="/rooms/:id" children={<SingleRoom />}></Route>
               <Route children={Error}></Route>
            </Switch>
         </Router>
      </>
   );
};

export default App;
