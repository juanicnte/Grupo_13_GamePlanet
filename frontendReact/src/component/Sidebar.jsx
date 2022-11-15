import React from 'react';
import images from '../assets/images/logo.png';
import '../css/components.css';
import {Link} from 'react-router-dom';

function Sidebar(){
    return(
        <React.Fragment>
            <div id='header-dashboard'>
            <img className="logo-image" src={images} alt="Logo Game Planet"/>
            <a href="http://localhost:3031/">Volver</a>
 
            <Link to="/Videojuegos">Videojuegos</Link> 

            <Link to="/ListaUsers">Usuarios</Link> 

            <Link to="/">Home</Link> 

            </div>
        </React.Fragment>
    )
}
export default Sidebar;