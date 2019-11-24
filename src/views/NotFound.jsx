import React from 'react';
import './style/NotFound.scss';
import Header from "../components/Header"

function NotFound(){
    return (
        <div>
        <Header/>
        <div className="NotFoundWrapper">
            <h1>404 Page Not Found</h1>
        </div>
        </div>
    );
}
export default NotFound;