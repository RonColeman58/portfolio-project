import React from 'react';
// IMPORTED IMAGES
import band01 from "../images/cchs01.jpg";
import band02 from "../images/guard01.jpg";
import band03 from "../images/guard02.webp";
import band04 from "../images/fmbc_at_the_gate.webp";
import band05 from "../images/NewsomeWinterGuard.jpg";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUP BOX
import { PopupboxManager, PopupboxContainer  } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

// Band01
const openPopupboxBand01 = () => {
    const content = (
        <>
        <img className="portfolio-image-popupbox" src={band01} alt="Cooper City HS" />
        <p>Ea consectetur amet minim commodo cillum laboris qui.</p>
        <b>Bands Of America:</b> <a className="hyper-link" onClick={() => 
        window.open("https://marching.musicforall.org/")}>https://marching.musicforall.org/ </a>
        </>
    )
    PopupboxManager.open({ content });
      PopupboxManager.update({
        content,
        config: {
        titleBar: {
          text: "Cooper City HS",
        },
      },
    });
}

const popupboxConfigBand01 = {
    titleBar: {
        enable: true,
        text: "Cooper City HS"
    },
    fadeIn: true,
    fadeInSpeed: 500
}


// Band02
const openPopupboxBand02 = () => {
    const content = (
        <>
        <img className="portfolio-image-popupbox" src={band02} alt="Color Guard Collage" />
        <p>Ea consectetur amet minim commodo cillum laboris qui.</p>
        <b>WGI:</b> <a className="hyper-link" onClick={() => window.open("https://wgi.org/")}>https://wgi.org/</a>
        </>
    )
    PopupboxManager.open({ content });
      PopupboxManager.update({
        content,
        config: {
        titleBar: {
          text: "Indoor Color Guard",
        },
      },
    });


}

const popupboxConfigBand02 = {
    titleBar: {
        enable: true,
        text: "Various Guards"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

// Band03
const openPopupboxBand03 = () => {
    const content = (
        <>
        <img className="portfolio-image-popupbox" src={band03} alt="Color Guard Collage" />
        <p>Ea consectetur amet minim commodo cillum laboris qui.</p>
        <b>SFWGA:</b> <a className="hyper-link" onClick={() => window.open("https://sfwga.org/Home.htm")}>https://sfwga.org/Home.htm</a>
        </>
    )
    PopupboxManager.open({ content });
      PopupboxManager.update({
        content,
        config: {
        titleBar: {
          text: "Guard Performer",
        },
      },
    });
}

const popupboxConfigBand03 = {
    titleBar: {
        enable: true,
        text: "Guard Performer"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

// Band04
const openPopupboxBand04 = () => {
    const content = (
        <>
        <img className="portfolio-image-popupbox" src={band04} alt="Color Guard Collage" />
        <p>Ea consectetur amet minim commodo cillum laboris qui.</p>
        <b>Bands Of America:</b> <a className="hyper-link" onClick={() => window.open("https://marching.musicforall.org/")}>https://marching.musicforall.org/</a>
        </>
    )
    PopupboxManager.open({ content });
      PopupboxManager.update({
        content,
        config: {
        titleBar: {
          text: "Guard At The Gate",
        },
      },
    });
}

const popupboxConfigBand04 = {
    titleBar: {
        enable: true,
        text: "Guard At The Gate"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

// Band05
const openPopupboxBand05 = () => {
  const content = (
      <>
      <img className="portfolio-image-popupbox" src={band05} alt="FFCC Championships" />
      <p>Ea consectetur amet minim commodo cillum laboris qui.</p>
      <b>FFCC:</b> <a className="hyper-link" onClick={() => window.open("https://ffcc.org/Home.htm")}>https://ffcc.org/Home.htm</a>
      </>
  )
  PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
      titleBar: {
        text: "Guard Performer",
      },
    },
  });
}

const popupboxConfigBand05 = {
  titleBar: {
      enable: true,
      text: "FFCC Championships"
  },
  fadeIn: true,
  fadeInSpeed: 500
}


    return (
<div id="portfolio" className="portfolio-wrapper">
  <div className="container">
    <h1 className="text-uppercase text-center py-5">portfolio</h1>
    <div className="image-box-wrapper">   
       <div className="portfolio-image-box" onClick={openPopupboxBand01}> 
      <img className="portfolio-image" src={band01} alt="Cooper City HS" />
      <div className="overflow"></div>
      <FontAwesomeIcon className="portfolio-icon" icon={ faSearchPlus } />
      </div> 
    {/*  */}
     <div className="portfolio-image-box" onClick={openPopupboxBand02}> 
       <img className="portfolio-image" src={band02} alt="Various Color Guards" />
       <div className="overflow"></div>
       <FontAwesomeIcon className="portfolio-icon" icon={ faSearchPlus } />
     </div> 
    {/*  */}
     <div className="portfolio-image-box" onClick={openPopupboxBand03}> 
      <img className="portfolio-image" src={band03} alt="Color Guard Member" />
      <div className="overflow"></div>
      <FontAwesomeIcon className="portfolio-icon" icon={ faSearchPlus } />
     </div> 
    {/*  */}
    <div className="portfolio-image-box" onClick={openPopupboxBand04}> 
    <img className="portfolio-image" src={band04} alt="Color Guard at starting gate" />
    <div className="overflow"></div>
    <FontAwesomeIcon className="portfolio-icon" icon={ faSearchPlus } />
     </div> 
    {/*  */}
      <div className="portfolio-image-box" onClick={openPopupboxBand05}> 
      <img className="portfolio-image" src={band05} alt="FFCC Championships" />
      <div className="overflow"></div>
      <FontAwesomeIcon className="portfolio-icon" icon={ faSearchPlus } />
     </div> 
  </div>  
 </div>  
        <PopupboxContainer { ...popupboxConfigBand01} />
        <PopupboxContainer { ...popupboxConfigBand02} />
        <PopupboxContainer { ...popupboxConfigBand03} />
        <PopupboxContainer { ...popupboxConfigBand04} />
        <PopupboxContainer { ...popupboxConfigBand05} />
</div>
  )
}

export default Portfolio;
