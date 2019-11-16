import React from 'react';
import './style/Header.scss';
import 'font-awesome/css/font-awesome.min.css';
import { FaUserAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import {Link} from 'react-router-dom';
import {GetProductsByName} from '../actions/GetProductsByName'
import {connect} from 'react-redux'

async function getProductsByTag(ev,props){
  if(ev.key=="Enter"){
   
    var search = ev.target.value.trim()
  
     await props.ProductsByName(search)
    
  }
  
}

function Header(props) {
  return (
    <div className="Header">
       
       <div className="ContenedorInput">
        <button onClick={()=>console.log(props)}>clickme</button>
           <input 
           type="text" 
           placeholder="Introduce un producto"
           onKeyPress={(ev)=>getProductsByTag(ev,props)}
           />
       
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
                Login/
                <Link className= "Link" to={'/registrar'}>SignUp</Link>
                </Link>
            
            </div>  
       
         </div>
         
    </div>
  );
}
const mapStateToProps = state => ({
  productos: state.products.products
})

const mapDispatchToProps = dispatch => ({
  ProductsByName: () => dispatch(GetProductsByName())

})
export default connect(mapStateToProps,mapDispatchToProps)(Header);