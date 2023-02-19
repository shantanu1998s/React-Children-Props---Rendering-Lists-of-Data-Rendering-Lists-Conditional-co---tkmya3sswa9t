import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
 const [num, setNum]=useState('');
  const handleChange=(e)=>{
    setNum(e.target.value*e.target.value);
  }

  return (
    <div id="main">
      <ChildComponent /> 
       <input id='input' onChange={handleChange} />
    
      <p id='output'>{num}</p>
    </div>
  )
}


export default App;
