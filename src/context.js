import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext(/*initial value here */);
class RoomProvider extends Component {
   state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
      /* todo: more state variables for RoomFilter */
      type: "all",
      capacity: 1,
      price: 0,
      minPice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      pets: false,
   };

   componentDidMount() {
      let rooms = this.formatData(items);
      let featuredRooms = rooms.filter((room) => room.featured === true);
      let maxPrice = Math.max(...rooms.map((room) => room.price));
      let maxSize = Math.max(...rooms.map((room) => room.size));
      this.setState({
         rooms,
         featuredRooms,
         sortedRooms: rooms,
         loading: false,
      });
   }

   formatData = (items) => {
      /* Furnishes the items from JSON into an easily-accessible rooms object*/
      let tempItems = items.map((item) => {
         let id = item.sys.id;
         let images = item.fields.images.map((image) => image.fields.file.url);
         let room = { ...item.fields, images, id };
         return room;
      });
      return tempItems;
   };

   getRoom = (slug) => {
      let tempRooms = [...this.state.rooms];
      /* returns only a single room item that matches the condition, unlike, filter() that returns an array of objects that match a condition */
      const room = tempRooms.find((room) => room.slug === slug);
      return room;
   };

   render() {
      return (
         <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
            {this.props.children}
         </RoomContext.Provider>
      );
   }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
