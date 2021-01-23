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
         maxPrice,
         maxSize,
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

   filterRooms = () => {
      let {
         rooms,
         type,
         capacity,
         price,
         minPice,
         maxPrice,
         minSize,
         maxSize,
         breakfast,
         pets,
      } = this.state;

      /* Get all the rooms */
      let tempRooms = [...rooms];

      /* todo: change capacity, price to an int type */
      capacity = parseInt(capacity);
      price = parseInt(price);

      /* filter by type */
      if (type !== "all") {
         tempRooms = tempRooms.filter((room) => room.type === type);
      }

      /* Filter by capacity */
      if (capacity !== 1) {
         tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
      }

      /* Filter by price */
      if (price > 0) {
         tempRooms = tempRooms.filter((room) => room.price <= price);
      }
      this.setState({ sortedRooms: tempRooms });
   };

   handleChange = (e) => {
      /* This is a general function to handle changes in forms: whether it is select-option or checkbox. Hence, we defined the target variable to get its type */
      let target = e.target;
      let type =
         target.type; /* type of targetted element: select or checkbox */
      let name = target.name; /* name property of that targetted element */

      /* value of targeted element depends on its type: 
         true/false --> if type is checkbox
         value --> of type is select */
      let value = target.type === "checkbox" ? target.checked : target.value;
      //console.log(name, value, type, e.target.checked);
      this.setState(
         {
            [name]: value,
         },
         this.filterRooms /* set a callback func everytime state changes */
      );
   };

   render() {
      return (
         <RoomContext.Provider
            value={{
               ...this.state,
               getRoom: this.getRoom,
               handleChange: this.handleChange,
            }}
         >
            {this.props.children}
         </RoomContext.Provider>
      );
   }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
