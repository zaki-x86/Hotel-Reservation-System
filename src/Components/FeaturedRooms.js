import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "../Components/Loading";
import Room from "../Components/Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
   static contextType = RoomContext;
   render() {
      let { featuredRooms, loading } = this.context;
      //console.log(featuredRooms);
      let rooms = featuredRooms.map((room) => {
         return <Room key={room.id} room={room} />;
      });

      return (
         <section className="featured-rooms">
            <Title title="feature rooms" />
            <div className="featured-rooms-center">
               {loading ? <Loading /> : rooms}
            </div>
         </section>
      );
   }
}
