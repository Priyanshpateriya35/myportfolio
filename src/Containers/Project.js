import React from "react";
import calculator from '../Images/Calculator.jpg'
import Corona from '../Images/corona-.jpg'
import Weather from '../Images/weatherblack.png'
import ToDo from '../Images/To-do.jpg'
import Cart from '../Images/laptopcart.jpg'
import './Project.css';


function Project() {
  return (
     <section className='m-4' id='projects'>
    <div className="container-fluid text-center bdy-caro">
      {/* <hr className='dark-horizontal '></hr>  */}
      
      <h3 className='p-2 project-caro'>PROJECTS</h3>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          {/* additional  */}
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>

          {/* additional  */}
        </div>
        <div className="carousel-inner mt-3 mb-4">
          <div className="carousel-item active">
          <a href='https://priyanshpateriya35.github.io/React-Calculator/' ><img src={calculator} className="d-block w-100" alt="..." /></a>  

            <div
              className="carousel-caption d-none d-md-block"
              
            >
              <a href="https://priyanshpateriya35.github.io/React-Calculator/" className='text-caro'>
                <h5>React-Calculator</h5>
              </a>
              <p>This React project based on simple calculation web app</p>
            </div>
          </div>
          <div className="carousel-item">
          <a href='https://priyanshpateriya35.github.io/IndiaCovid19/' ><img src={Corona} className="d-block w-100" alt="..." /></a> 

            <div
              className="carousel-caption d-none d-md-block"
              
            >
              <a href="https://priyanshpateriya35.github.io/IndiaCovid19/" className='text-caro'>
                <h5> React Covid-19 Tracker</h5>
              </a>
              <p>
                This project based on number of cases and recoveries of covid,
                simple React API call.
              </p>
            </div>
          </div>
          <div className="carousel-item">
          <a href='https://priyanshpateriya35.github.io/React-Weather/'><img src={Weather} className="d-block w-100" alt="..." /></a>

            <div
              className="carousel-caption d-none d-md-block"
              
            >
              <a href="https://priyanshpateriya35.github.io/React-Weather/" className='text-caro'>
                <h5> React Weather Application</h5>
              </a>
              <p>
                This project based on the simple current weather in the world to
                know more click on image .
              </p>
            </div>
          </div>
          <div className="carousel-item">
          <a href='https://priyanshpateriya35.github.io/React-ToDo/'><img src={ToDo} className="d-block w-100" alt="..." /></a>

            <div className="carousel-caption d-none d-md-block ">
              <a href="https://priyanshpateriya35.github.io/React-ToDo/" className='text-caro'>
                <h5>To_DO App</h5>
              </a>
              <p>This project based on the to-do Application .</p>
            </div>
          </div>
          <div className="carousel-item">
           <a href='https://priyanshpateriya35.github.io/react-redux-cart/'><img src={Cart} className="d-block w-100" alt="..." /></a>

            <div
              className="carousel-caption d-none d-md-block"
              
            >
              <a href="https://priyanshpateriya35.github.io/react-redux-cart/" className='text-caro'>
                <h5>React-Redux-cart</h5>
              </a>
              <p>
                This project based on the react redux shopping cart.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </section>
  );
}

export default Project;
