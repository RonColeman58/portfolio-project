import React from 'react'
import logo from "../Percentage.png";
import "../App.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-scroll";


const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
<div className="container">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img img className="logo" src={logo} alt="Logo"/>  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color: "#fff" }} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto flex-nowrap">
        <li className="nav-item">
          <Link smooth={true} to="home"  className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">Services</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">Experience</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="testimonials" offset={-110} className="nav-link" href="#">Testimonials</Link>
        </li> 
        <li className="nav-item">
          <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">Contacts</Link>
        </li> 

       </ul>
    </div>
  </div>
  </div> 
</nav>    
    )
}

export default Navbar
