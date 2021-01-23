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
      minPrice,
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
            {/* Price */}
            <div className="form-group">
               <label htmlFor="price">Room Price ${price}</label>
               <input
                  type="range"
                  name="price"
                  min={minPrice}
                  max={maxPrice}
                  id="price"
                  value={price}
                  onChange={handleChange}
                  className="form-control"
               />
            </div>
            {/* end of Price */}
            {/* Size */}
            <div className="form-group">
               <label htmlFor="size">Room Size</label>
               <div className="size-inputs">
                  <input
                     type="number"
                     name="minSize"
                     id="size"
                     value={minSize}
                     onChange={handleChange}
                     className="size-input"
                  />
                  <input
                     type="number"
                     name="maxSize"
                     id="size"
                     value={maxSize}
                     onChange={handleChange}
                     className="size-input"
                  />
               </div>
            </div>
            {/* end of Size */}
            {/* Extras */}
            <div className="form-group">
               <div className="single-extra">
                  <input
                     type="checkbox"
                     name="breakfast"
                     id="breakfast"
                     checked={breakfast}
                     onChange={handleChange}
                  />
                  <label htmlFor="breakfast">breakfast</label>
               </div>
               <div className="single-extra">
                  <input
                     type="checkbox"
                     name="pets"
                     id="pets"
                     checked={pets}
                     onChange={handleChange}
                  />
                  <label htmlFor="pets">pets</label>
               </div>
            </div>
            {/* End of Extras */}
         </form>
      </section>
   );
};

export default RoomsFilter;
