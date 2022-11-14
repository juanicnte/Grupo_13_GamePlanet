import React from 'react';
import images from '../assets/images/logo.png';
import '../css/components.css';

function Sidebar(){
    return(
        <React.Fragment>
            <div id='header-dashboard'>
            <img className="logo-image" src={images} alt="Digital House"/>
            <a href="http://localhost:3031/">Volver</a>
            </div>
        </React.Fragment>
    )
}
export default Sidebar;