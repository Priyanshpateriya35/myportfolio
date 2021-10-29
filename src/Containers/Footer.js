import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faCopyright } from '@fortawesome/free-solid-svg-icons';
import './footer.css'

import { faFacebookF, faTwitter,faInstagram, faYoutube,faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'



function Footer() {
  return (
    <footer className='text-center text-lg-start bg-dark text-muted'>
    <section className='footer_section d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                           {/* To don't want to show social media iocns in small size put *d-none* in down class to hide */}
       <div className='me- text-center d-lg-block'> 
        <span>Get connected with us on social networks:</span>
        <div className='brand_icons '>
          <a href='https://www.facebook.com/priyansh.pateriya.752' className='me-4 text-reset'>
          <i className='bicon'><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></i>
          </a>
          <a href='https://www.twitter.com/PriyanshPater35' className='me-4 text-reset Ticon'>
          <i className='bicon'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></i>
          </a>
          <a href='https://www.instagram.com/priyanshpateriya35' className='me-4 text-reset Iicon'>
          <i className='bicon'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></i>
          </a>
          <a href='https://www.github.com/priyanshpateriya35' className='me-4 text-reset Gicon'>
          <i className='bicon'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></i>
          </a>
          <a href='https://www.linkedin.com/in/priyansh-pateriya35' className='me-4 text-reset Licon'>
          <i className='bicon'><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></i>
          </a>
          <a href='https://youtube.com/channel/UCDLGtx-NoCGQHET5HZ1EOUA' className='me-4 text-reset Yicon'>
          <i className='bicon'><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></i>
          </a>
        </div>
    </div>
    </section>
    <section className=''>
      <div className='container text-center text-md-start mt-5'>
        <div className='row mt-3'>
          <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 footer-text'>
             Company
            </h6>
            <p>
              Coming Soon...
            </p>


          </div>

          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 footer-text'>Full Stack Development</h6>
            <p>
              <a href='#' className='text-reset'>CSS5</a>
            </p>
            <p>
              <a href='#' className='text-reset'>Bootstrap</a>
            </p>
            <p>
              <a href='#' className='text-reset'>Javascript</a>
            </p>
            <p>
              <a href='#' className='text-reset'>MERN</a>
            </p>
            <p>
              <a href='#' className='text-reset'>PHP-MySQl</a>
            </p>
          </div>
          <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 '>Useful links
            </h6>
            <p>
              <a href='#' className='text-reset'>Pricing</a>
            </p>
            <p>
              <a href='#' className='text-reset'>Settings</a>
            </p>
            <p>
              <a href='#' className='text-reset'>Orders</a>
            </p>
            <p>
              <a href='#' className='text-reset'>Help</a>
            </p>
          </div>
          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4' >
            <h6 className='text-uppercase fw-bold mb-4 footer-text '>Contact
                  
            </h6>
            <p>
            <i className='bicon '><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></i>  priyanshpateriya384@gmail.com</p>
              <p>
              <i className='bicon'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></i> +91-9131588543</p>

          </div>

        </div>
        </div> 
        
     

    </section>
    <div className='text-center p-4' style={{background: 'rgba(0,0,0,0.05)'}}>All rights reserved <i className='pt-5' style={{fontSize: "20px",}}><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon></i> 2021 Copyright:
      <a className='text-reset fw-bold' href='http://getbootstrap.com'></a><br/>
      <a className='text-reset fw-bold' href='http://fontawesome.com'></a>
    </div>
    
    </footer>
  )
}


export default Footer;

