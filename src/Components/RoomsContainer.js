import React, { useContext } from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";
import { RoomContext } from "../context";
import Loading from "./Loading";

const RoomsContainer = () => {
   let context = useContext(RoomContext);
   //console.log(context);
   const { loading, sortedRooms, rooms } = context;
   if (loading) {
      return <Loading />;
   }
   return (
      <>
         <RoomsFilter rooms={rooms} />
         <RoomsList rooms={sortedRooms} />
      </>
   );
};

export default RoomsContainer;
