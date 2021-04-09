import React from "react";
import author from "./Jeff_logo.jpg";


const AboutMe = () => {
    return (
  <div id="about" className="container py-5">
    <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img className="profile-img " src={author} alt="Author photo" />
             </div>
        </div>
            <div className="col-lg-6 col-xm-12">
              <h1 className="about-heading">About Me</h1>
              <p>
                Voluptate ex eiusmod labore dolor et dolore. Velit occaecat 
                velit in id occaecat. Duis commodo culpa enim officia sunt nulla 
                ipsum esse magna ex anim cupidatat. Sunt sit nostrud in mollit 
                est duis cupidatat cillum cupidatat amet laboris do esse.

                Lorem voluptate duis incididunt sit laborum minim Lorem fugiat. 
                Velit velit ad fugiat Lorem irure sit nulla eu aliqua dolore. Non 
                sunt aliquip aliquip voluptate duis qui mollit nisi tempor amet 
                aliqua. Nostrud mollit exercitation mollit proident dolor nulla. 
                Laborum fugiat occaecat commodo qui et voluptate sunt.
              </p> 
            </div>
      
    </div>
  </div>
    )
}

export default AboutMe
