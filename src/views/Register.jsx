import React from 'react';
//import './style/Register.scss';
import Header from "../components/Header"
function Register(){
    return(
        <div>
            <Header/>
        <div className="Container">
            <div className="sidebarleft"></div>
            
            
            <div className="content">
                <h1 className="title">Registrarse</h1>
                
                    <form className="form">

                     

                        <div className="formField">

                        <label className="label">Correo electronico</label>
                        <input type="email" placeholder="Email"></input>

                        </div>

                        <div className="formField">

                        <label className="label">Nombre </label>
                        <input type="text" placeholder= "Nombre"></input>

                        </div>

                        <div className="formField">

                        <label className="label">Contraseña</label>
                        <input type="password" placeholder="Contraseña"></input>
                        
                        </div>

                        <div className="FormButtons">
                            <button type="sumbit" className="FormButton"> Registrarse </button>
                        </div>
                    </form>
                


            </div>
            
            
            <div className="sidebarrigth"></div>
        </div>
        </div>
    );
}
export default Register;