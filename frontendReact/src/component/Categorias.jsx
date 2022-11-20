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
                    categorias.map((categoria) => {

                        return(

                            <li className='list-products' key={categoria.id} >

                                <h3 className='title-products'>{categoria.name}</h3>
                                {
                                    categoria.product.map((product) => {
                                    return(
                                        <li key={product.id} >
                                            <h6>{product.name}</h6>
                                        </li>
                                    )})
                                }
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Categorias;