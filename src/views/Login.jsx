import React from 'react';
import './style/Login.scss';
function Login(){
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
                            <button className="FormButton"> Login</button>
                        </div>
                    </form>
                


            </div>
            
            
            <div className="sidebarrigth"></div>
        </div>
    );
}
export default Login;