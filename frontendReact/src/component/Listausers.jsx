import React from 'react';
import { useState , useEffect } from 'react';
import '../css/components.css';

function Listausers() {

    const [ users , setUsers ] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3031/api/users')

        .then(response => response.json())

        .then(({data})=>{

            setUsers(data)
        })

        .catch(error => console.error(error))

    }, [])

    useEffect(() => { //Actualiza el componenente
    
    }, [users])
    
    return(

        <div className='container-products'>

            <h2 className='box-title'>Lista de Usuarios: {users.length}</h2>

            <ul className='list-container'>

                {
                    users.map((user , i) => {

                        return(

                            <li className='list-products' key={i} >

                                <h3 className='title-products'>{user.fullName}</h3>

                                <img src={`http://localhost:3031/images/${user.image}`} alt="" width='150' className='user-image' />

                            </li>

                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Listausers;