import React from "react";
import Welcome from "./Components/welcome";
import "./App.css";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";

const App = () => {
   return (
      <>
         <Welcome />
         <Home />
         <Rooms />
         <SingleRoom />
         <Error />
      </>
   );
};

export default App;
