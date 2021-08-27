import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share'

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>5509 Blue Jack Oak Circle Tamarac Fl, 33319</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-5555">+1(555)555-5555</a>
            </div>
            <div className="d-flex">
              <p>Zendrumcorps@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contacts</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-item-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={'https://www.facebook.com'}
                quote={'Where to find me'}
                hashtag="#jbreal"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>

              <TwitterShareButton
                url={'https://www.twitter.com'}
                quote={'Where to find me'}
                hashtag="#jbreal"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>

              <RedditShareButton
                url={'https://www.twitter.com'}
                quote={'Where to find me'}
                hashtag="#jbreal"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>

              <LinkedinShareButton
                url={'https://www.linkedin.com'}
                quote={'Where to find me'}
                hashtag="#jbreal"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp; Ron Coleman Design | All Rights
              Reserved}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
