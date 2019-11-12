import React from 'react';
import './style/Login.scss';
import { connect } from 'react-redux';
import {LoginUser} from '../actions/LoginUser'
import { Component } from 'react';

function mifunción(){
    console.log("Esto funciona")
}




function Login(props){
    return(
        <div className="Container">
            <div className="sidebarleft"></div>
            
            
            <div className="content">
                <h1 className="title">Login</h1>
                
                    <form className="form">

                     

                        <div className="formField">

                        <label className="label">Correo electronico</label>
                        <input type="email" placeholder="Email"></input>

                        </div>


                        <div className="formField">

                        <label className="label">Contraseña</label>
                        <input type="password" placeholder="Contraseña"></input>
                        
                        </div>

                        <div className="FormButtons">
                            <label><input type="checkbox"/>Recuerdame</label>
                            <button 
                            className="FormButton"
                            onClick={()=>mifunción()}
                            > Login</button>
                        </div>
                    </form>
                


            </div>
            
            
            <div className="sidebarrigth"></div>
        </div>
    );
}


 const mapStateToProps = state =>({
                id: state.user.id,
                name: state.user.name,
                mail: state.user.mail,
                password: state.user.password
 })

 const mapDispatchToProps = dispatch =>({
     LoginUser:(mail,password)=> dispatch(LoginUser(mail,password))
 })
 export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);