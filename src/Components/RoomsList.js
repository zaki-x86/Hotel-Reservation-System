import React from "react";
import Room from "./Room";

const RoomsList = ({ rooms }) => {
   // console.log(rooms);
   if (rooms.length === 0) {
      return (
         <div className="empty-research">
            <h3>unfortunately no rooms matched your request.</h3>
         </div>
      );
   }
   return (
      <section className="roomslist">
         <div className="roomslist-center">
            {rooms.map((room) => (
               <Room key={room.id} room={room} />
            ))}
         </div>
      </section>
   );
};

export default RoomsList;
