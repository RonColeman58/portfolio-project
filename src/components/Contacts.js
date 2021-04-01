import React from "react";

const Contacts = () => {
    return (
        <div className="contacts">
          <div className="text-center">
            <h1>contact me</h1>
            <p>Please fill out the form and leave a description 
            of you program needs</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                {/* Name Input */}
                <div className="text-center">
              <input 
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
              />
              <div className="line"></div>
                </div>
                {/* Phone Number */}
                <div className="text-center">
              <input 
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  phone="phone"
              />
              <div className="line"></div>
                 </div>
                {/* Email Address */}
                <div className="text-center">
              <input 
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  email="email"
              />
              <div className="line"></div>
                </div>
                {/* Subject */}
                <div className="text-center">
              <input
                  type="text" 
                  className="form-control"
                  placeholder="Subject"
                  subject="subject"
              />
              <div className="line"></div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                {/* Description Area */}
                <div className="text-center">
                <textarea 
                  type="text"
                  className="form-control"
                  placeholder="Please leave a short description of your show"
                  email="email"
                ></textarea>
                <div className="line"></div>
                </div>
                <button className="btn-main-offer contacts-btn" type="submit">contact me</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Contacts;
