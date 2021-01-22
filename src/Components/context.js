import React, { Component } from "react";

const RoomContext = React.createContext(/*initial value here */);

class RoomProvider extends Component {
   state = {};
   render() {
      return (
         <RoomContext.Provider value={"hello"}>
            {this.props.children}
         </RoomContext.Provider>
      );
   }
}

const RoomConsumer = RoomContext.RoomConsumer;

export { RoomProvider, RoomConsumer, RoomContext };
