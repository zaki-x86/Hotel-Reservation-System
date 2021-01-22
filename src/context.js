import React, { Component } from "react";

const RoomContext = React.createContext(/*initial value here */);

class RoomProvider extends Component {
   state = {
      greeting: "hello",
      name: "zaki",
   };
   render() {
      return (
         <RoomContext.Provider value={{ ...this.state }}>
            {this.props.children}
         </RoomContext.Provider>
      );
   }
}

const RoomConsumer = RoomContext.RoomConsumer;

export { RoomProvider, RoomConsumer, RoomContext };
