import React, {useEffect, useState} from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import { NavLinks} from '../constants';
import { styles } from '../styles';

import { logo, menu, close } from '../assets';

const Navbar = () => {
  useState [Active, setActive] = useState(second)
  return (
    <nav
    className ={`$(styles.paddindX} w-full flex 
      items -center py-5 fixed top-0 z-20 
      bg-primary`}
    >
      <div className="w-full flex justify-between 
      items-center max-w-7x1 mx-auto">
        <Link
         to="/"
         className="flex items-center gap-2"
         onClick={()=> {
          setActive("");
         }}
         >

        </Link>
      </div>
   </nav>
  )
}

export default Navbar