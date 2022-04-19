import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  
  let style = { 
    
    backgroundColor:"#000"}
  
  
  return (
    <div className="App">
      <NavBar/>
      <header style={style} className="App-header">
        
      </header>
    </div>
  );
}

export default App;
