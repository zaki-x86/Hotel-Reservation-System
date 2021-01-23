import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../Components/StyledHero";

export default class SingleRoom extends Component {
   constructor(props) {
      /* props in this component is coming from react router that we setup on App.js! 
         Note that this is what the props object include: 
         *history*: {length: 9, action: "PUSH", location: {…}, createHref: ƒ, push: ƒ, …}
         *location*: {pathname: "/rooms/double-deluxe", search: "", hash: "", state: undefined, key: "k6q80n"}
         *match*: {path: "/rooms/:slug", url: "/rooms/double-deluxe", isExact: true.. 

         todo: We're interested in the slug, hence, we set up the function getRoom() in context.js. 
      */
      super(props);
      this.state = {
         slug: this.props.match.params.slug,
         defaultBcg,
      };
   }

   static contextType = RoomContext;
   //componentDidMount() {}

   render() {
      const { getRoom } = this.context;
      const room = getRoom(this.state.slug);
      console.log(room);
      if (!room) {
         return (
            <div className="error">
               <h3>Room is not found</h3>
               <Link to="/rooms" className="btn-Primary">
                  Return to Rooms
               </Link>
            </div>
         );
      }

      const {
         name,
         description,
         capacity,
         size,
         price,
         extras,
         breakfast,
         pets,
         images,
      } = room;

      return (
         <>
            <StyledHero img={images[0]}>
               <Banner title={`${name} room`}>
                  <Link to="/rooms" className="btn-primary">
                     Return to Rooms
                  </Link>
               </Banner>
            </StyledHero>
            <section className="single-room">
               {/* show all room images  */}
               <div className="single-room-images">
                  {images.map((image, index) => {
                     return <img key={index} src={image} alt={name} />;
                  })}
               </div>
               <div className="single-room-info">
                  <article className="disc">
                     <h3>Details</h3>
                     <p>{description}</p>
                  </article>
                  <article className="info">
                     <h3>Info</h3>
                     <h6>Price: ${price}</h6>
                     <h6>size: {size}SQFT</h6>
                     <h6>
                        max capacity:{" "}
                        {capacity > 1
                           ? `${capacity} people`
                           : `${capacity} person`}
                     </h6>
                     <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                     <h6>{breakfast && "free breakfast included"}</h6>
                  </article>
               </div>
            </section>
            <section className="room-extras">
               <h6>Extras: </h6>
               <ul className="extras">
                  {extras.map((extra, index) => {
                     return <li key={index}> {extra} </li>;
                  })}
               </ul>
            </section>
         </>
      );
   }
}
