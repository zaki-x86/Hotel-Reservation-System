import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const getUniqueItems = (items, value) => {
   return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
   let context = useContext(RoomContext);
   //console.log(context);
   const {
      handleChange,
      type,
      capacity,
      price,
      minPice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
   } = context;

   /* get unique types: !note that: type 'all' is not included, so we will add it manually */
   let types = getUniqueItems(rooms, "type");
   types = ["all", ...types];

   /* get unique capacity */
   let occupancy = getUniqueItems(rooms, "capacity");
   console.log(occupancy);

   return (
      <section className="filter-container">
         <Title title="search-rooms" />
         <form className="filter-form">
            {/* selectType */}
            <div className="form-group">
               <label htmlFor="type">Room Type</label>
               <select
                  name="type"
                  id="type"
                  value={type}
                  className="form-control"
                  onChange={handleChange}
               >
                  {
                     /* This is is a select menu that contains room type (single, double, ..etc). Although it makes more sense to add inside it <option>type</option> hard coded manually since we don't have a lot of types anyway, but we will automate it for the sake of training and imporve scalability as well. */
                     types.map((type, index) => {
                        return (
                           <option value={type} key={index}>
                              {type}
                           </option>
                        );
                     })
                  }
               </select>
            </div>
            {/* End of selectType */}

            {/* Guests */}
            <div className="form-group">
               <label htmlFor="capacity">Guests</label>
               <select
                  name="capacity"
                  id="capacity"
                  value={capacity}
                  className="form-control"
                  onChange={handleChange}
               >
                  {occupancy.map((item, index) => {
                     return (
                        <option value={item} key={index}>
                           {item}
                        </option>
                     );
                  })}
               </select>
            </div>
            {/* End of Guests */}
         </form>
      </section>
   );
};

export default RoomsFilter;
