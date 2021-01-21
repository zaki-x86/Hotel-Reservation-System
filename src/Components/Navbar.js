import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
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
                     <Link to="/">
                        <img src={logo} alt="beach resort" />
                     </Link>
                  </Router>
                  <button
                     type="button"
                     className="nav-btn"
                     onClick={this.handleToggle}
                  >
                     <FaAlignRight className="nav-icon" />
                  </button>
               </div>
               <ul
                  className={
                     this.state.isOpen ? "nav-links show-nav" : "nav-links"
                  }
               >
                  <li>
                     <Router>
                        <Link to="/">Home</Link>
                     </Router>
                  </li>
                  <li>
                     <Router>
                        <Link to="/rooms">Rooms</Link>
                     </Router>
                  </li>
               </ul>
            </div>
         </nav>
      );
   }
}
