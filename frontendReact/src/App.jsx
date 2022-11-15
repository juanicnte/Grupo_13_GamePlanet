import { useState } from 'react'
import Sidebar from './component/Sidebar'
import Videojuegos from './component/Videojuegos';
import Listausers from './component/Listausers';
import Categorias from './component/Categorias';
import Home from './component/Home';
import { Route, Routes} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div>

    <Sidebar />

    <Routes>

      <Route path="/"  element={ <Home />} />

      <Route path="/ListaUsers" element= { <Listausers />} />

      <Route path="/Videojuegos" element={ <Videojuegos />} />

    </Routes>

    </div>

  )
}

export default App;
