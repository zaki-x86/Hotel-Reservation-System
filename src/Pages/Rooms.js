import React from "react";
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import { Link } from "react-router-dom";
import RoomsContainer from "../Components/RoomsContainer";

const Rooms = () => {
   return (
      <>
         <Hero hero="roomsHero">
            <Banner title="Our Rooms">
               <Link to="/" className="btn-primary">
                  Return Home
               </Link>
            </Banner>
         </Hero>
         <RoomsContainer />
      </>
   );
};

export default Rooms;
