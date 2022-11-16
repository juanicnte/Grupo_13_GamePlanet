import React from 'react';
import images from '../assets/images/logo.png';
import '../css/components.css';
import {Link} from 'react-router-dom';

function Sidebar(){
    return(
        <React.Fragment>
            <div id='header-dashboard'>
            <img className="logo-image" src={images} alt="Logo Game Planet"/>
            <Link to="/">Home</Link> 
 
            <Link to="/ListaUsers">Usuarios</Link> 

            <Link to="/Videojuegos">Videojuegos</Link> 

            <a href="http://localhost:3031/">Volver</a>

            </div>
        </React.Fragment>
    )
}
export default Sidebar;