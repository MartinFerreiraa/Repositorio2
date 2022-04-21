import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  
  let style = {   
    backgroundColor:"#000"}      
  return (
    <div className="App">
      <NavBar/>     
      <ItemListContainer greeting="BIENVENIDOSS!!"/>
      <header style={style} className="App-header"></header>       
    </div>
  );
}

export default App;
