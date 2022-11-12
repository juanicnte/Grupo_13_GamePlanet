import React from 'react';
import images from '../assets/images/logo.png';

function Sidebar(){
    return(
        <React.Fragment>
            
            <img className="w-100" src={images} alt="Digital House"/>
            
        </React.Fragment>
    )
}
export default Sidebar;