import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext(/*initial value here */);
class RoomProvider extends Component {
   state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
   };

   componentDidMount() {
      let rooms = this.formatData(items);
      let featuredRooms = rooms.filter((room) => room.featured === true);
      this.setState({
         rooms,
         featuredRooms,
         sortedrRooms: rooms,
         loading: false,
      });
   }

   formatData = (items) => {
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
