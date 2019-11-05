import React from 'react';
import './style/Header.scss';
import 'font-awesome/css/font-awesome.min.css';
import { FaUserAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";

import {Link} from 'react-router-dom';


function Header() {
  return (
    <div className="Header">
       
       <div className="ContenedorInput">
        
           <input type="text" placeholder="Introduce un producto"/>
       
       </div>
      
       <div className="ContenedorIcon">
            <div>
               <IconContext.Provider
                     value={{
                     color:"white",
                     size:"3.5em"
                      }}
                >
                    <FaUserAlt/>
       
               </IconContext.Provider>
     
              
            </div>      

            <div>
              
                <Link  className="Link" to={'/login'}>
                Login/SignUp
                </Link>
            
            </div>  
       
         </div>
         
    </div>
  );
}

export default Header;