import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";


const Header = () => {
return (
<div id="home" className="header-wrapper">
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
    <Link smooth={true} to="contacts" href="#" className="btn-main-offer">Contacts</Link>
    
        </div>
    </div>
    )
    }

export default Header
