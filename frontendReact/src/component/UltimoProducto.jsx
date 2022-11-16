import React from 'react';
import { useState , useEffect } from 'react';
import '../css/components.css';

function UltimoProducto() {

    const [ products , setProducto ] = useState({});

    useEffect(() => {

        fetch('http://localhost:3031/api/products/last')

        .then(response => response.json())

        .then(({data})=>{

            setProducto(data)

        })

        .catch(error => console.error(error))

    }, [])

    return(

        <div className='container-products'>

            <h2 className='box-title'>Ultimo Producto:</h2>

            <h3 className='title-products'>{products.name}</h3>

            <img src={`http://localhost:3031/images/${products.image}`} alt="" width='150' className='user-image' />

        </div>
    )
}
//<img src={`http://localhost:3031/images/${user.image}`} alt="" width='150' />
export default UltimoProducto;