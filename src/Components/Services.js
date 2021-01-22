import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
   state = {
      services: [
         {
            icon: <FaCocktail />,
            title: "Free Cocktails",
            info:
               "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae nostrum repellendus nulla cupiditate commodi quos!",
         },
         {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info:
               "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus mollitia veritatis qui, facilis debitis dolores.",
         },
         {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info:
               "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero ipsam officia a, alias quo.",
         },
         {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info:
               " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt itaque enim consectetur eaque ab?",
         },
      ],
   };
   render() {
      return (
         <section className="services">
            <Title title="services" />
            <div className="services-center">
               {this.state.services.map((item, index) => {
                  return (
                     <article key={index} className="service">
                        <h6>{item.icon}</h6>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                     </article>
                  );
               })}
            </div>
         </section>
      );
   }
}
