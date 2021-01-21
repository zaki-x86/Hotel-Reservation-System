import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAllignRight } from "react-icons/fa";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Navbar extends Component {
   state = {
      isOpen: false,
   };

   handleToggle = () => this.setState({ isOpen: !this.state.isOpen });
   render() {
      return (
         <nav className="navbar">
            <div className="nav-center">
               <div className="nav-header">
                  <Router>
                     <Link to="/" />
                  </Router>
                  <img src={logo} alt="beach resort" />
               </div>
            </div>
         </nav>
      );
   }
}
