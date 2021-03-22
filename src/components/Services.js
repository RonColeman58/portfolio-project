import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'


const Services = () => {
    return (
      <div className="services">
         <h1 className="py-5">my services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-6">
                       <div className="box">
                       <div className="circle">
                       <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                       </div>
                         <h3>Show Design</h3>
                         <p>A complete top to bottom show creation. Colors, equipment and prop design.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-md-3 col-6">
                       <div className="box">
                       <div className="circle">
                       <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                       </div>

                         <h3>Program Coordination</h3>
                         <p>The fundamentals of program building includes musical and visual coordination.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-md-3 col-6">
                       <div className="box">
                       <div className="circle">
                       <FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" />
                       </div>

                         <h3>Design Consultations</h3>
                         <p>Have a show in mind? I can help guide you to the best production of your ideas.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-md-3 col-6">
                       <div className="box">
                       <div className="circle">
                       <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
                       </div>

                         <h3>Instructional Services</h3>
                         <p>Set guidelines and techniques needed to acheive greater results for time spent. </p>
                        </div>
                    </div>

                </div>

            </div> 
          </div>
            
    )
}

export default Services
