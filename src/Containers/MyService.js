import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faProjectDiagram , faPaintBrush } from "@fortawesome/free-solid-svg-icons";

import { faGooglePlusG,  } from '@fortawesome/free-brands-svg-icons'

import "./service.css";

function MyService() {
  return (
    <section className="item bg-light" id="myservices">
      <h2 className='My-services'>MY SERVICES</h2>
      <div className="container-fluid py-5 text-center">
      
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="card ">
              <div className="card-body">
               <i className='icon '><FontAwesomeIcon icon={faPaintBrush} /></i> 
                <h3>Web Design</h3>
                <p>
                 "Designers are responsible artists. Wheather it is web designing or development it requires a sense of imagination."
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card ">
              <div className="card-body">
               <i className='icon '><FontAwesomeIcon icon={faDesktop} /></i> 
                <h3>Web Development</h3>
                <p>
                 "If you think Math is tough try Web developing..."
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card ">
              <div className="card-body">
               <i className='icon '><FontAwesomeIcon icon={faProjectDiagram} /></i> 
                <h3>Website Promotion</h3>
                <p>
                  "website promote you 24/7: No employee will do that."
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card ">
              <div className="card-body">
               <i className='icon '><FontAwesomeIcon icon={faGooglePlusG} /></i> 
                <h3>Google Ads</h3>
                <p>
                 "Search the world's Google has many special features to help you find exactly what you're..."
                </p>
              </div>
            </div>
          </div>

          

          

        </div>
      </div>
    </section>
  );
}

export default MyService;
