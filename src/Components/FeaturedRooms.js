import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
   static contextType = RoomContext;
   render() {
      const { greeting, name } = this.context;
      console.log(value);
      return (
         <div>
            <h1>Featured Rooms here: {greeting}</h1>
         </div>
      );
   }
}
