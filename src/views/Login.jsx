import React, {Component} from 'react';
import './style/Login.scss';
import { connect } from 'react-redux';
import {LoginUser} from '../actions/LoginUser'
import Header from "../components/Header"



class Login extends Component{
constructor(props){
    super(props);
    this.state={
        mail:"",
        password:"",
        token:"",
        remember:false
    }
    this.componentDidMount = ()=>{
       
     
          }
    this.componentDidUpdate = ()=>{    
       
              }
}

async UserLogin(){
   await this.props.Login(this.state.mail,this.state.password,this.state.remember)
   
   
}
rememberMe(){
   this.setState({
        ...this.state,
        remember:!this.state.remember
    })
    
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
                            <label><input type="checkbox" onChange={()=>this.rememberMe()}/>Recuerdame</label>
                            <button 
                            className="FormButton"
                            type="submit"
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
    
   Login:(mail,password,remember)=>dispatch(LoginUser(mail,password,remember))

  })
  export default connect(mapStateToProps,mapDispatchToProps)(Login)