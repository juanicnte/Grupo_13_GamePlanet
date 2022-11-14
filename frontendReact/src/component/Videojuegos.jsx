import React from 'react';
import { useState , useEffect } from 'react';

function Videojuegos() {

    const [ juegos , setJuegos ] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3031/api/products')

        .then(response => response.json())

        .then(({data})=>{

            console.log(data)
            setJuegos(data)
        })

        .catch(error => console.error(error))

    }, [])

    useEffect(() => { //Actualiza el componenente
    
    }, [juegos])
    
    return(

        <div className='container-products'>

            <h2 className='box-title'>Lista de Videojuegos: {juegos.length}</h2>

            <ul clasName='list-container'>

                {
                    juegos.map((juego , i) => {

                        return(

                            <li className='list-products' key={i} >

                                <h3 className='title-products'>{juego.name}</h3>

                                <img src={`http://localhost:3031/images/${juego.image}`} alt="" width='150' className='game-image' />

                            </li>

                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Videojuegos;