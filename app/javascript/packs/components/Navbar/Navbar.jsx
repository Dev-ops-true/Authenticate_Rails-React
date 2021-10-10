import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Navbar.css'

const Navbar = (props) => {
  const logoutHandler = () => {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout();
      })
      .catch((error) => {
        console.log("logout error", error);
      });
  };

  return (
    <div className='navbar'>
      <ul>
        <li className='navbar-links'>
          <Link className='navbar-link' to="/">Home</Link>
          {props.loggedInStatus == "LOGGED_IN" ? (
            <button 
            className='logout-btn navbar-links ' 
            onClick={logoutHandler}
            >Log Out</button>
          ) : (
            <Link 
              className='navbar-link' 
              to="/login"
              >Login/Register
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
