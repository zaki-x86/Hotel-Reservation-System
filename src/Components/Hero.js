import React from "react";

export default function Hero({ children, hero }) {
   return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
   /* defaultHero css class is the default background image for all pages */
   hero: "defaultHero",
};
