import React from 'react'
import logo from "../Percentage.png";
import "../App.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img img className="logo" src={logo} alt="Logo"/>  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color: "#fff" }} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto flex-nowrap">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Process</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacts</a>
        </li>
       </ul>
    </div>
  </div>
  </div> 
</nav>    
    )
}

export default Navbar
