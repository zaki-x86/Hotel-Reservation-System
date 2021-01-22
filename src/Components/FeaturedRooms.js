import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "../Components/Loading";
export default class FeaturedRooms extends Component {
   static contextType = RoomContext;
   render() {
      const { featuredRooms } = this.context;
      console.log(featuredRooms);
      return (
         <div>
            <h1>Featured Rooms here: </h1>
            <Loading />
         </div>
      );
   }
}
