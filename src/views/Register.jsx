//import './style/Register.scss';
import Header from "../components/Header"
import React, {Component} from 'react'
import {connect} from "react-redux"
import {RegistryUser} from "../actions/RegistryUser"


class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            mail:"",
            password:"",
            token:""
        }
        this.componentDidMount = ()=>{
               
            //Tendria que buscar si existe un jwt en localStorage y en caso de existir y ser el del usuario auntenticado
            //mostrar la misma interfaz con una mensaje de saludo. Estp es para poder crear otro usuario desde una sesion iniciada.
            
              }
        this.componentDidUpdate = ()=>{    
               
                  }
    }
    async UserRegistry(){
        await this.props.Registry(this.state.name,this.state.mail,this.state.password);
        
      }
    render(props){
        return(
            <div>
            <Header props={this.props}/>
        <div className="Container">
            <div className="sidebarleft"></div>
            
            
            <div className="content">
                <h1 className="title">Registrarse</h1>
                
                    <form className="form">

                     

                        <div className="formField">

                        <label className="label">Correo electronico</label>
                        <input type="email" placeholder="Email" onChange={(ev)=>this.setState({mail:ev.target.value})}></input>

                        </div>

                        <div className="formField">

                        <label className="label">Nombre </label>
                        <input type="text" placeholder= "Nombre"  onChange={(ev)=>this.setState({name:ev.target.value})}></input>

                        </div>

                        <div className="formField">

                        <label className="label">Contraseña</label>
                        <input type="password" placeholder="Contraseña"  onChange={(ev)=>this.setState({password:ev.target.value})}></input>
                        
                        </div>

                        <div className="FormButtons">
                            <button className="FormButton" onClick={()=>this.UserRegistry()}> Registrarse </button>
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
    
   Registry:(name,mail,password)=>dispatch(RegistryUser(name,mail,password))

  })
  export default connect(mapStateToProps,mapDispatchToProps)(Register)