import React from "react";
import Typed from 'react-typed'
import Priyansh from "../Images/Priyansh.jpg";
import {useState} from 'react'
import './About.css'

// Read More Function start
const ReadMore = ({ children }) =>{
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore =() => {
    setIsReadMore(!isReadMore);
  };
return(
  <p className='text'>
    {isReadMore ? text.slice(0, 300) : text}
    <button className='read-or-hide' onClick={toggleReadMore}>
      {isReadMore ? "read more.." : "show less"}
    </button>
  </p>
)
};
// Read More function End
function About() {

  return ( 
   
    <section className="About-body my-1" id="about">
       
      <div className="container-fluid text-center">
        <hr className="dark horizontal"></hr>
        <div className="row">
          <div className="col-sm-5">
            <img className="img-wrap" src={Priyansh} alt="not found" />
          </div>
          <div className='col-sm-7 P-tag'>
            <h2 className='text-About'>ABOUT ME</h2>
        <Typed 
        className='d- typed-text text-danger my-4 '
        style={{fontSize: "25px"}}
        strings={["Hi, I am Priyansh"]}
        typeSpeed={50}
        backSpeed={50}
        loop
        />
            <ReadMore >Hey,this is my homepage, so I have to say something about myself. Sometimes it is hard to introduce yourself because you know yourself so well that you do not know where to start with.Let me give a try to see what kind of image you have about me through my self description.I hope that my impression about myself and your impression about me are not so different.Here it goes.
            
            I am a person who is positive about every aspect of life.There are many things I like to do, to see, and to experience.I like to read, I like to write, I like to think, I like to dream, I like to listen.I like to see the sunrise in the morning, I like to see the moonlight aat night, I like to smell the wind coming from the ocean, I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cannot sleep in the middle of the night and I like coding which I do daily my half of day spent on my laptop.
            This is a brief introduction of myself.If you are interested in knowing more, you also send me a message.
            
            </ReadMore>
          </div>
        </div>
      </div>
    </section>
  );
}


export default About;
