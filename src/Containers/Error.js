import React from "react";
import { NavLink } from "react-router-dom";
import "./Error1.css";
function Error() {
  return (
    <>
    <div className="notfound">
      <div className="notfound">
        <div className='notfound-404'>
        <h1>404</h1>
        </div>
        <h2>we are sorry, page not found!</h2>
        <p className='mb-5'>
          The page you are looking for might have been removed has its name changed or its temporarily unavailable.
        </p>
      <NavLink className="btn Back_home_btn" to="/"> Back to home </NavLink>
    </div>
   </div>
    </>
  );
}

export default Error;
