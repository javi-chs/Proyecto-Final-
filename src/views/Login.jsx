import React from 'react';
import './style/Login.scss';
function Login(){
    return(
        <div className="Container">
            <div className="sidebarleft"></div>
            
            
            <div className="hijo2">
                <h1 className="title">Login</h1>
                
                    <form className="form">

                        <div>

                        <label className="label">Nombre </label>
                        <input type="text"></input>
                       
                        </div>

                        <div>

                        <label className="label">Correo electronico</label>
                        <input type="email"></input>

                        </div>

                        <div>

                        <label className="label">Contraseña</label>
                        <input type="password"></input>
                        
                        </div>
                    </form>
                


            </div>
            
            
            <div className="sidebarrigth"></div>
        </div>
    );
}
export default Login;