import React, {Component} from 'react' 
import "./style/Header.scss"

//ICONO
import 'font-awesome/css/font-awesome.min.css';
import { FaUserCircle, FaChevronLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";
//REDUX y Link
import {Link} from 'react-router-dom';
import {GetAllProducts} from '../actions/GetAllProducts'
import {searchByAll} from "../actions/SearchByAll"
import {getPagesByAll} from "../actions/GetPagesByAll"
import {GetProductsByName} from '../actions/GetProductsByName'
import {searchByName} from "../actions/SearchByName"
import {getPagesByName} from "../actions/GetPagesByName"
import {connect} from 'react-redux'

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
          isLogged:false,
          userName:""
        }
        this.componentDidMount = ()=>{
          
          if(this.checkIfLogin() && this.state.isLogged===false ){
            this.setState({
              isLogged:true,
              userName:this.getUserNameFromJWT()
            })
          }

              
              
              }
              
        this.componentDidUpdate=()=>{
          
        }      
    }

    getUserNameFromJWT(){
      const tokenLocal = localStorage.getItem("token")
      const tokenSession = sessionStorage.getItem("token");
      if(tokenLocal !==null || tokenSession !==null ){
          if(tokenLocal !==null){
            var segments = tokenLocal.split(".");
            var data = JSON.parse(decodeURIComponent(escape(window.atob(segments[1]))));
            return data.sub;
          }
          else{
            var segments = tokenSession.split(".");
            var data = JSON.parse(decodeURIComponent(escape(window.atob(segments[1]))));
            return data.sub;
          }
      }
      return "";
     
    }
    checkIfLogin(){
      const local = localStorage.getItem("token")
      const session= sessionStorage.getItem("token")
      if(local!== null || session!== null){
        return true
      }
      else {return false}
    }
    
    
    
    
    async getProductsByTag(ev){
        if(ev.key==="Enter"){
          if(ev.target.value==""){
            this.props.SearchByAll()
            await this.props.GetPagesByAll()
            await this.props.Allproducts(1)  
          }
          else{

            var search = ev.target.value.trim().toUpperCase();
            this.props.SearchByName(search)
            await this.props.GetPagesByName(search)
            await this.props.ProductsByName(search,1)
              
          }
        }
        
      }

      resetStateAndStorage(){
        localStorage.removeItem("token")
        sessionStorage.removeItem("token")
        this.setState({
          isLogged:false,
          userName:""
        })
      }
      render(){
        if(this.state.isLogged===true){
          return (
            <div className="miHeader">

            <div className="atras">
                <IconContext.Provider
                     value={{
                     color:"#bca559",
                     size:"5vw"
                      }}
                >
                    <FaChevronLeft
                      onClick={()=>this.props.props.history.goBack()}
                    />
       
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
                        <Link to={"/otrocomponente"}>
                        
                        <IconContext.Provider
                              value={{
                              color:"#bca559",
                              size:"5vw"
                                }}
                          >
                              <FaUserCircle/>
                
                        </IconContext.Provider>
                        </Link>

                      </div>
          <div>
           
           <h5>
           Hola, {this.state.userName}
          
           </h5>
          <button className="FormButton" onClick={()=>this.resetStateAndStorage()}>Salir</button>
       
       </div>  
            </div>

        </div>

          );
        }

        else{

        }
          return (
            <div className="miHeader">

            <div className="atras">
                <IconContext.Provider
                     value={{
                     color:"#bca559",
                     size:"5vw"
                      }}
                >
                    <FaChevronLeft
                    onClick={()=>this.props.props.history.goBack()}
                    />
       
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
           Login/</Link>
           <Link className= "Link" to={'/registrar'}>SignUp
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
    ProductsByName: (name, page) => dispatch(GetProductsByName(name,page)),
    SearchByName:(tag)=> dispatch(searchByName(tag)),
    GetPagesByName:(tag)=>dispatch(getPagesByName(tag)),
    SearchByAll: ()=>dispatch(searchByAll()),
    Allproducts: (page) => dispatch(GetAllProducts(page)),
    GetPagesByAll:()=> dispatch(getPagesByAll()),
  })


export default connect(mapStateToProps,mapDispatchToProps)(Header)