import React from 'react';
import { useState , useEffect } from 'react';
import '../css/components.css';

function UltimoUser() {

    const [ user , setUsers ] = useState({});

    useEffect(() => {

        fetch('http://localhost:3031/api/users/last')

        .then(response => response.json())

        .then(({data})=>{

            setUsers(data)

            console.log(data)
        })

        .catch(error => console.error(error))

    }, [])
    
    return(

        <div className='container-products'>

            <h2 className='box-title'>Ultimo Usuario:</h2>

            <h3 className='title-products h3-user'>{user.fullName}</h3>

            <img src={`http://localhost:3031/images/avatars/${user.image}`} alt="" width='150' className='user-image' />

    
        </div>
    )
}

export default UltimoUser;