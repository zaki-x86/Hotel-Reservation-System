import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
   static contextType = RoomContext;
   render() {
      const {} = this.context;
      console.log();
      return (
         <div>
            <h1>Featured Rooms here: </h1>
         </div>
      );
   }
}
