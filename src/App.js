import './App.css';

import Rutas from '../src/routes/Rutas'
import GlobalStateContext from './context/GlobalStateContext';



function App() {
  return (
    <div >
      <GlobalStateContext>
        <Rutas />
      </GlobalStateContext>    
    </div>

  );
}
export default App;