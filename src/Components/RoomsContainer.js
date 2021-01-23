import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

const RoomsContainer = () => {
   return (
      <div>
         <h1>Rooms Container</h1>
         <RoomsFilter />
         <RoomsList />
      </div>
   );
};

export default RoomsContainer;
