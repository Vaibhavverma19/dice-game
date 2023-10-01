
import { useState } from 'react';
import './App.css';
import Landingpage from './components/landingpage';
import Gamingzone from './components/Gamingzone';

function App() {
  const [isstarted,setisstarted]=useState(false);
  function toggleisstarted(){
     setisstarted((prev)=>!prev);
  }
  return(
    <>
    {isstarted?<Gamingzone/>: <Landingpage toggle={toggleisstarted}/>}
    </>
  )
}

export default App;
