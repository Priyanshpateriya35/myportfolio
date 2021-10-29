import React from 'react'
import Typed from 'react-typed'
import { NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className='Header-wrapper'>
      <div className='main-info'>
      
        <h1>Web development and websites promotions</h1>
        <Typed 
        className='typed-text'
        
        strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
        typeSpeed={40}
        backSpeed={60}
        loop
        />
        
         <NavLink className="btn-main-offer" smooth
               to="/contact">
                contact me
              </NavLink> 
         
       

      </div>
    </div>
  )
}

export default Header;
