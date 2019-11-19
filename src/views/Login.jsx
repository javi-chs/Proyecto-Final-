import React, {Component} from 'react';
import './style/Login.scss';
import { connect } from 'react-redux';
import {LoginUser} from '../actions/LoginUser'
import Header from "../components/Header"
import userService from "../services/userServices"


class Login extends Component{
constructor(props){
    super(props);
    this.state={
        mail:"",
        password:"",
        token:""
    }
    this.componentDidMount = ()=>{
               
        //Tendria que buscar si existe un jwt en localStorage y en caso de existir y ser el del usuario auntenticado
        //mostrar la misma interfaz con una mensaje de saludo. Estp es para poder crear otro usuario desde una sesion iniciada.
     
        //console.log("Mount props")
     //console.log(this.props)
          }
    this.componentDidUpdate = ()=>{    
      
              }
}
/**async prueba(){
    const token = await userService.login("javi.cervello@gmail.com","astros_24")
    console.log("Esto vale token")
    console.log(token)
    localStorage.setItem("token",token)
}*/
async UserLogin(){
   await this.props.Login(this.state.mail,this.state.password)
   
}
render(){
    return(
        <div>
           <Header props={this.props}/>
        <div className="Container">
             
            <div className="sidebarleft"></div>
            
            
            <div className="content">
                <h1 className="title">Login</h1>
                
                    <form className="form">

                     

                        <div className="formField">

                        <label className="label">Correo electronico</label>
                        <input type="email" placeholder="Email" onChange={(ev)=>this.setState({mail:ev.target.value})}></input>

                        </div>


                        <div className="formField">

                        <label className="label">Contraseña</label>
                        <input type="password" placeholder="Contraseña" onChange={(ev)=>this.setState({password:ev.target.value})}></input>
                        
                        </div>

                        <div className="FormButtons">
                            <label><input type="checkbox"/>Recuerdame</label>
                            <button 
                            className="FormButton"
                            onClick={()=>this.UserLogin()}
                            > Login</button>
                        </div>
                    </form>
                
                   

            </div>
            
            
            <div className="sidebarrigth"></div>
        </div>
        </div>
    );
}
}



const mapStateToProps = state => ({
    token: state.user.token,
    httpStatus:state.user.httpStatus
  })
  
const mapDispatchToProps = dispatch => ({
    
   Login:(mail,password)=>dispatch(LoginUser(mail,password))

  })
  export default connect(mapStateToProps,mapDispatchToProps)(Login)