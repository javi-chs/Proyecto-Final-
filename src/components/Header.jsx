import React, {Component} from 'react' 
import "./style/Header.scss"

//ICONO
import 'font-awesome/css/font-awesome.min.css';
import { FaUserCircle, FaChevronLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";
//REDUX y Link
import {Link} from 'react-router-dom';

import {GetProductsByName} from '../actions/GetProductsByName'
import {GetAllProducts} from '../actions/GetAllProducts'
import {connect} from 'react-redux'

class Header extends Component{
    constructor(props){
        super(props)
        this.componentDidMount = ()=>{
              
            this.loadProducts()
              }
              
    }


    async loadProducts(){
        await this.props.Allproducts();
      }
    async getProductsByTag(ev){
        if(ev.key==="Enter"){
            var search = ev.target.value.trim()
     
            await this.props.ProductsByName(search)
        }
        
      }


      render(){
          return (
            <div className="miHeader">

            <div className="atras">
                <IconContext.Provider
                     value={{
                     color:"#bca559",
                     size:"5vw"
                      }}
                >
                    <FaChevronLeft onClick={()=>console.log(this.props.props.history.goBack())}/>
       
               </IconContext.Provider>
            </div>
           
            <div className="search">
                <input 
                    className="inputProduct"
                    type="text" 
                    placeholder="Introduce un producto"
                    onKeyPress={(ev)=>this.getProductsByTag(ev)}
                />
            </div>


            <div className="login">
                      <div>
                      <IconContext.Provider
                     value={{
                     color:"#bca559",
                     size:"5vw"
                      }}
                >
                    <FaUserCircle/>
       
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
}








const mapStateToProps = state => ({
    productos: state.products.products
  })
  
  const mapDispatchToProps = dispatch => ({
    ProductsByName: (name) => dispatch(GetProductsByName(name)),
    Allproducts:()=>dispatch(GetAllProducts())
  })


export default connect(mapStateToProps,mapDispatchToProps)(Header)