import { useState } from 'react'
import Sidebar from './component/Sidebar'
import Videojuegos from './component/Videojuegos';
import Listausers from './component/Listausers';
import Categorias from './component/Categorias';

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div>

    <Sidebar />

    <Videojuegos />

    <Listausers />

    <Categorias />
    
    </div>

  )
}

export default App
