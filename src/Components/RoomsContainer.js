import React, { useContext } from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomContext } from "../context";
import Loading from "./Loading";

const RoomsContainer = () => {
   let context = useContext(RoomContext);
   /* When you console log context, you will receive 2 log. First, is a value object with all state variables grabbed from context.js, but they are empty arrays. Second, is a again a value object with all state variables grabbed from context.js but the arrays will not be empty */
   //console.log(context);
   const { loading, sortedRooms, rooms } = context;
   if (loading) {
      return <Loading />;
   }
   return (
      <>
         <h1>Rooms Container</h1>
         <RoomsFilter rooms={rooms} />
         <RoomsList rooms={sortedRooms} />
      </>
   );
};

export default RoomsContainer;
