import React from 'react';
import { useState , useEffect } from 'react';

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

        <div>

            <h2>Categorias: {categorias.length}</h2>

            <ul>

                {
                    categorias.map((categoria , i) => {

                        return(

                            <li key={i} >

                                <h3>{categoria.name}</h3>

                            </li>

                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Categorias;