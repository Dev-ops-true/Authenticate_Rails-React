import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

const Navbar = () => {

  const logoutHandler = () => {
    axios
    .delete("http://localhost:3000/logout", { withCredentials: true})
    .then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log("logout error", error)
    })
  }
  return (
    <div>
      <ul>
        <li>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/register" >Register</Link>
          <Link to="/login" >Login</Link>
          <button onClick={logoutHandler}>Log Out</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
