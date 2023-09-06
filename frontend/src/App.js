import logo from './fractal.png';
import './App.css';
import React,{useState,useEffect} from 'react';
import Mandel from './Mandel';

function App() {
  const  [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
  return (
    <div className="App">
      {
        loading?
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
        :

       <Mandel></Mandel>
      }
      
    </div>
  );
}

export default App;
