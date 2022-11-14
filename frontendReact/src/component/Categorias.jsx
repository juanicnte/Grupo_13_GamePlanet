import React from 'react';
import { useState , useEffect } from 'react';
import '../css/components.css';

function Categorias() {

    const [ categorias , setCategorias ] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3031/api/categories')

        .then(response => response.json())

        .then(({data})=>{

            setCategorias(data)
        })

        .catch(error => console.error(error))

    }, [])

    useEffect(() => { //Actualiza el componenente
    
    }, [categorias])
    
    return(

        <div className='container-products'>

            <h2 className='box-title'>Categorias: {categorias.length}</h2>

            <ul className='list-container'>

                {
                    categorias.map((categoria , i) => {

                        return(

                            <li className='list-products' key={i} >

                                <h3 className='title-products'>{categoria.name}</h3>

                            </li>

                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Categorias;