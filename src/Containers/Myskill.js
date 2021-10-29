import React from "react";
import "./Myskill.css"
function Myskill() {
  return (
    <section className="bg-dark my-5">
     
    <div className='container skills-bar' id="myskills">
    <h2 className='myskills_h'>MY Skills</h2>
      <div className='bar'>
        <div className='info'>
         <span>HTML</span>
        </div>
      <div className='progress-line html'><span></span></div>
      </div>
      <div className='bar'>
        <div className='info'>
         <span>CSS</span>
        </div>
      <div className='progress-line css'><span></span></div>
      </div>
      <div className='bar'>
        <div className='info'>
         <span>JAVASCRIPT</span>
        </div>
      <div className='progress-line javascript'><span></span></div>
      </div>
      <div className='bar'>
        <div className='info'>
         <span>BOOTSTRAP</span>
        </div>
      <div className='progress-line bootstrap'><span></span></div>
      </div>
      <div className='bar'>
        <div className='info'>
         <span>REACT</span>
        </div>
      <div className='progress-line react'><span></span></div>
      </div>
      <div className='bar'>
        <div className='info'>
         <span>PHP-MYSQL</span>
        </div>
      <div className='progress-line PHP-MYSQL'><span></span></div>
      </div>
    </div>
    </section>
  );
}

export default Myskill;
