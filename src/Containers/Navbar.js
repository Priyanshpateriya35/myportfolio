import React from "react";
import { HashLink as Link,  } from "react-router-hash-link";
import portfolio from "../Images/Portfolio.jpg";
//react fontawesome //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid text-center">
        <Link className="navbar-brand" to="/home">
          <img className="Port" src={portfolio} alt="image not found" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link  className="nav-link"  to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" 
               to="/about">
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  
               to="/myskills">
                my skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" 
               to="/myservices">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"   
               to="/projects">
                projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" 
               to="/contact">
                contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
 
  }

export default Navbar;
