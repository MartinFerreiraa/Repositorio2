
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Rutas from '../src/routes/Rutas'







function App() {

  return (

    <div >
      <NavBar />
      <Rutas/>
    </div>

  );
}

export default App;


/**<Router>
          <Route patch='/' element={<ItemListContainer/>}/>
          <Route patch='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        </Router> */
