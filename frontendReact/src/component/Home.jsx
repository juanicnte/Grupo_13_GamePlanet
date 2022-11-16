import React from 'react';
import App from '../App';
import Categorias from './Categorias';
import UltimoProducto from './UltimoProducto';
import UltimoUser from './UltimoUser';

function Home() {

    return(

        <div>

            <Categorias />

            <UltimoProducto />

            <UltimoUser />
        
        </div>
        )
}

export default Home;