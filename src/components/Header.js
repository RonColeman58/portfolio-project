import React from "react";
import Typed from "react-typed";
import Particles from 'react-particles-js';


const Header = () => {
return (
<div className="header-wrapper">
    <div className="main-info">
    <h1>Pagentry Arts show development</h1>
    <Typed 
        className="typed-text"
        strings={["Show Design", "Program Coordination", "Design Consultations", "Instructional Services"]}
        delay={2000}
        typeSpeed={60}
        backSpeed={70}
        loop
    />
    <a href="#" className="btn-main-offer">Contacts</a>
    
        </div>
    </div>
    )
    }

export default Header
