import React from 'react';
import { useState , useEffect } from 'react';

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

        <div>

            <h2>Lista de Usuarios: {users.length}</h2>

            <ul>

                {
                    users.map((user , i) => {

                        return(

                            <li key={i} >

                                <h3>{user.fullName}</h3>



                            </li>

                        )
                    })
                }
            </ul>

        </div>
    )
}
//<img src={`http://localhost:3031/images/${user.image}`} alt="" width='150' />
export default Listausers;