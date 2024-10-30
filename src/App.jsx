import { useState } from 'react';
import './App.css';

function App() {
  // Move state declaration inside the component
  const [bgcolor, setBgColor] = useState('olive');
  
function setColor() {
  return setBgColor('white')    
}

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:bgcolor}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2 '>
      <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2 ' >
      {/* <button type='button' className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-white p-2 m-2'> */}
        <button type="button"  className='bg-white rounded-full shadow-lg px-4 py-1' onClick={()=>{return setBgColor('white')} }>White</button>
        <button type="button" style={{backgroundColor:'blue'}} className='rounded-full shadow-lg text-white px-4 py-1' onClick={()=>{return setBgColor('blue')} }>Blue</button>
        <button type="button" style={{backgroundColor:'black'}} className='bg-black rounded-full shadow-lg text-white px-4 py-1' onClick={()=>{return setBgColor('black')} }>Black</button>
        <button type="button" style={{backgroundColor:'green'}} className='bg-green rounded-full shadow-lg text-white px-4 py-1' onClick={()=>{return setBgColor('green')} }>Green</button>
        <button type="button" style={{backgroundColor:'yellow'}} className='bg-yellow rounded-full shadow-lg text-white px-4 py-1' onClick={()=>{return setBgColor('yellow')} }>Yellow</button>
        <button type="button" style={{backgroundColor:'orange'}} className='bg-orange rounded-full shadow-lg text-white px-4 py-1' onClick={()=>{return setBgColor('orange')} }>Orange</button>
        <button type="button" style={{backgroundColor:'grey'}} className='bg-grey rounded-full shadow-lg text-white px-4 py-1' onClick={()=>{return setBgColor('grey')} }>Grey</button>
        <button type="button" style={{backgroundColor:'olive'}} className='bg-olive rounded-full shadow-lg text-white px-4 py-1' onClick={()=>{return setBgColor('olive')} }>Olive</button>
        <button type="button" style={{backgroundColor:'pink'}} className='bg-pink rounded-full shadow-lg text-white px-4 py-1' onClick={()=>{return setBgColor('pink')} }>Pink</button>
      {/* </button> */}
    </div>
    </div>
    </div>
  );
}

export default App;
