import React, { useContext } from "react";
import RoomContext from "../context";
import Title from "./Title";

const RoomsFilter = ({ rooms }) => {
   let context = useContext(RoomContext);
   const {
      type,
      capacity,
      price,
      minPice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
   } = context;

   return (
      <section className="filter-container">
         <h1>Rooms Filter</h1>
      </section>
   );
};

export default RoomsFilter;
